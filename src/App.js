import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { themeSettings } from "./theme";
import Navbar from "./scenes/global/Navbar"
import DotGroup from "./scenes/global/DotGroup"
import Home from "./scenes/home";
// import Homes from "./scenes/home/Homes";
import Features from "./scenes/features";
import { Box } from "@mui/material";
import useMediaQuery from "./hooks/useMediaQuery"
import ScrollToTop from "./components/SmoothScroll";



const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // const [isTopOfPage, setIsTopOfPage] = useState(true);

  // useEffect(()=>{
  //   const handleScroll = ()=>{

  //   }
  // },[])



  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <main className="content">
            <Box sx={{ width: '5/6', marginX: 'auto', height: '100%', position: 'fixed', top: 0, height: { xs: "100%", md: "100vh" }, }}>
              {isDesktop && (
                <DotGroup />
              )}
            </Box>
            {/* <Navbars /> */}
            <Navbar />
            <ScrollToTop />
            <Routes>
              {/* <Route path="/" element={<Homes />} /> */}
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
