export default function ServerError() {}

// import { Button, Container, Divider, Paper, Typography } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function ServerError() {
//   let navigate = useNavigate();
//   const { state } = useLocation<any>();
//   return (
//     <Container component={Paper}>
//       {state?.error ? (
//         <>
//           <Typography variant='h5' gutterBottom>
//             Server Error
//           </Typography>
//           <Divider />
//           <Typography>
//             {state.error.detail || "Internal server error"}
//           </Typography>
//         </>
//       ) : (
//         <Typography variant='h5' gutterBottom>
//           Server Error
//         </Typography>
//       )}
//       <Button onClick={() => navigate(-1)}></Button>
//     </Container>
//   );
// }
