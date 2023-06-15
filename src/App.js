import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { themeSettings } from "./theme";
import Navbar from "./scenes/global/Navbar"
// import Navbars from "./scenes/global/Navbars"
import Home from "./scenes/home";
import Features from "./scenes/features";


const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <main className="content">
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
