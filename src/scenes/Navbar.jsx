import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "../hooks/useMediaQuery"
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '../components/Button';


const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    const handleButtonClick = () => {

    }
    return (
        <AppBar
            position="static"
            sx={{
                borderBottom: '2px solid black',
                borderTop: '2px solid black',
                height: '80px',
                marginTop: '50px'
            }}
        >
            <Toolbar>
                <Typography variant="h2">
                    HelloWorld is on the way
                </Typography>
                <Button
                    onClick={handleButtonClick}
                    text="Login"
                    sx={{
                        backgroundColor: 'black', height: "100%", width: '195px', variant: "outlined", "&:hover": {
                            backgroundColor: "black"
                        },
                    }}
                />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar