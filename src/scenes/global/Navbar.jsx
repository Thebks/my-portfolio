import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "../../hooks/useMediaQuery"
import { AppBar, Box, Toolbar, Typography, useTheme } from '@mui/material';
import Button from '../../components/Button';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const { palette } = useTheme();

    const handleButtonClick = () => {

    }
    return (
        <AppBar
            position="static"
            sx={{
                borderBottom: '2px solid black',
                borderTop: '2px solid black',
                height: '80px',
                marginTop: '50px',

            }}
        >
            <Toolbar sx={{ p: 0, height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box sx={{ "&:hover": { color: palette.primary[900] }, display: 'flex', gap: '16px' }}>
                    <Link to="/"
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = palette.primary[500])}
                        onMouseLeave={(e) => (e.target.style.color = 'inherit')} >
                        Home
                    </Link>

                    <Link to="/features"
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = palette.primary[500])}
                        onMouseLeave={(e) => (e.target.style.color = 'inherit')} >
                        Features
                    </Link>
                    <Link to="/"
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = palette.primary[500])}
                        onMouseLeave={(e) => (e.target.style.color = 'inherit')} >
                        Contact
                    </Link>
                    <Link to="/"
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = palette.primary[500])}
                        onMouseLeave={(e) => (e.target.style.color = 'inherit')} >
                        Projects
                    </Link>
                </Box>
                <Button
                    onClick={handleButtonClick}
                    text="Login"
                    sx={{
                        backgroundColor: 'black',
                        height: "100%",
                        width: '195px',
                        variant: "outlined",
                        borderRadius: 0,
                        "&:hover": {
                            backgroundColor: "black"
                        },

                    }}
                />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar