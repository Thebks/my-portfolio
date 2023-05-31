import { Box, Typography, useTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { styled } from "@mui/system";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import { themeSettings } from "./theme";
import NewFile from "./components/newfile";


const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<NewFile />} />
          </Routes>
          {/* <Typography> Iam a boy</Typography> */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
