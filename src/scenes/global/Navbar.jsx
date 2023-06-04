import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "../../hooks/useMediaQuery"
import { AppBar, Box, Toolbar, Typography, makeStyles, useTheme } from '@mui/material';
import Button from '../../components/Button';
import { Link, NavLink } from 'react-router-dom'
import { setMenuActive } from './menuActiveLinkSlice';
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
    // const newStyle = useStyles();

    const dispatch = useDispatch();                   //Redux method
    const activeLink = useSelector((state) => state.menuActiveLink);

    const [isMenuToggled, setIsMenuToggled] = useState('/');           //useState hook
    const { palette } = useTheme();

    const handleButtonClick = () => { }

    const handleClick = (to) => {
        setIsMenuToggled(to)
    }

    const handleClickRedux = (to) => {
        dispatch(setMenuActive(to));
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
                    {/* I used react buildin useState hook to manage the state */}
                    <Link to="/"
                        style={{ color: 'inherit', textDecoration: isMenuToggled === '/' ? 'underline' : 'none', }}
                        onMouseEnter={(e) => (e.target.style.color = palette.green[500])}
                        onMouseLeave={(e) => (e.target.style.color = 'inherit')}
                        onClick={() => handleClick('/')} >
                        Home
                    </Link>

                    <Link to="/features"
                        style={{ color: 'inherit', textDecoration: isMenuToggled === '/features' ? 'underline' : 'none', }}
                        onMouseEnter={(e) => (e.target.style.color = palette.green[500])}
                        onMouseLeave={(e) => (e.target.style.color = 'inherit')}
                        onClick={() => handleClick('/features')} >
                        Features
                    </Link>
                    {/* I used react buildin useState hook to manage the state */}

                    {/* I have used the reduxtoolkit method  here */}
                    <Link to="/contact"
                        style={{ color: 'inherit', textDecoration: activeLink === '/contact' ? 'underline' : 'none', }}
                        onMouseEnter={(e) => (e.target.style.color = palette.green[500])}
                        onMouseLeave={(e) => (e.target.style.color = 'inherit')}
                        onClick={() => handleClickRedux('/contact')} >
                        Contact
                    </Link>
                    <Link to="/Projects"
                        style={{ color: 'inherit', textDecoration: activeLink === '/projects' ? 'underline' : 'none', }}
                        onMouseEnter={(e) => (e.target.style.color = palette.green[500])}
                        onMouseLeave={(e) => (e.target.style.color = 'inherit')}
                        onClick={() => handleClickRedux('/projects')}>
                        Projects
                    </Link>
                    {/* I have used the reduxtoolkit method  here */}
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