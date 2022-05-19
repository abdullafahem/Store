import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Footer from "./Footer";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "../errors/NotFound";
// import ServerError from "../errors/ServerError";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const palleteType = darkMode ? "light" : "dark";
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:id' element={<ProductDetails />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          {/* <Route path='/server-error' element={<ServerError />} /> */}
          <Route element={<NotFound />} />
        </Routes>
      </Container>
      <Footer darkMode={darkMode} handleThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
}

export default App;
