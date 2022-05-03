import { AppBar, Toolbar, Typography } from "@mui/material";
import ToggleButton from "./ToggleButton";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant='h6'>STORE</Typography>
        <ToggleButton checked={darkMode} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
}
