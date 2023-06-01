import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "../hooks/useMediaQuery"
import { AppBar, Toolbar, Typography } from '@mui/material';


const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);

    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h2">
                    HelloWorld is on the way
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar