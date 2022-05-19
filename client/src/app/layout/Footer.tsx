import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

function Copyright() {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {"Copyright © "}&nbsp;
      <Link
        sx={{ textDecoration: "none", "&:hover": { color: "grey.500" } }}
        color='inherit'
        href='https://codewithabdulla.netlify.app/'
      >
        CodeWithAbdulla
      </Link>
      &nbsp;&nbsp;
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer({ darkMode, handleThemeChange }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth='sm'>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
