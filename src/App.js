import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { themeSettings } from "./theme";
import Navbar from "./scenes/global/Navbar"
// import Navbars from "./scenes/global/Navbars"
import DotGroup from "./scenes/global/DotGroup"
import Home from "./scenes/home";
import Features from "./scenes/features";
import { Box } from "@mui/material";
import useMediaQuery from "./hooks/useMediaQuery"



const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <main className="content">
            {/* <Box sx={{ width: '5/6', marginX: 'auto', height: '100%', height: { xs: "100%", md: "100vh" }, }}>
              {isDesktop && (
              )}
            </Box> */}
            <DotGroup />
            {/* <Navbars /> */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
            </Routes>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
