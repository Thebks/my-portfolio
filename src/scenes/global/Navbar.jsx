import React, { useState, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "../../hooks/useMediaQuery"
import { AppBar, Box, Container, Toolbar, Typography, makeStyles, useTheme } from '@mui/material';
import Button from '../../components/Button';
import { Link, NavLink } from 'react-router-dom'
import { setMenuActive, toggleMenu } from './menuActiveLinkSlice';
import { useDispatch, useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const dispatch = useDispatch();
    const { menuActive, menuToggled } = useSelector((state) => state.menuActiveLink);
    const { palette } = useTheme();
    const isAboveSmallScreen = useMediaQuery("(min-width:768px)");


    const handleClickRedux = (to) => {
        dispatch(setMenuActive(to));
    }

    const smallScreenMenuToggle = () => {
        dispatch(toggleMenu());
    };


    return (
        <>
            {isAboveSmallScreen ? (
                <>
                    <Typography variant="h1" sx={{ fontFamily: 'Playfair Display', fontSize: '3rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', color: palette.black[900], flexGrow: 1, textAlign: 'center', marginTop: '10px' }}>
                        THEBKS
                    </Typography>
                    <AppBar sx={{ zIndex: 40, position: 'static', top: 0, height: '80px', marginTop: '20px', borderBottom: '2px solid black', borderTop: '2px solid black', }}>
                        <Toolbar sx={{ p: 0, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
                            <Box sx={{ display: 'flex', gap: '16px', alignItems: "center" }}>
                                {/* Home */}
                                <Box
                                    component={Link}
                                    to="/"
                                    sx={{
                                        color: 'inherit',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        boxSizing: 'border-box',
                                        padding: '16px 20px',
                                        width: '80px',
                                        height: '49px',
                                        borderRadius: menuActive === '/' ? '30px' : '0',
                                        border: menuActive === '/' ? `1px solid ${palette.black[500]}` : 'none',
                                        backgroundColor: menuActive === '/' ? '#FFFFFF' : 'inherit',
                                        '&:hover': {
                                            border: '3px solid #000000',
                                            boxShadow: '3px 4px 0px 2px #000000',
                                            borderRadius: '30px',
                                            background: '#FFFFFF',
                                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        },
                                    }}
                                    onClick={() => handleClickRedux('/')}
                                >
                                    Home
                                </Box>
                                {/* features */}
                                <Box
                                    component={Link}
                                    to="/features"
                                    sx={{
                                        color: 'inherit',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        boxSizing: 'border-box',
                                        padding: '16px 20px',
                                        width: '80px',
                                        height: '49px',
                                        borderRadius: menuActive === '/features' ? '30px' : '0',
                                        border: menuActive === '/features' ? `1px solid ${palette.black[500]}` : 'none',
                                        backgroundColor: menuActive === '/features' ? '#FFFFFF' : 'inherit',
                                        '&:hover': {
                                            border: '3px solid #000000',
                                            boxShadow: '3px 4px 0px 2px #000000',
                                            borderRadius: '30px',
                                            background: '#FFFFFF',
                                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        },
                                    }}
                                    onClick={() => handleClickRedux('/features')}
                                >
                                    Features
                                </Box>
                                {/* Contact */}
                                <Box
                                    component={Link}
                                    to="/contact"
                                    sx={{
                                        color: 'inherit',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        boxSizing: 'border-box',
                                        padding: '16px 20px',
                                        width: '80px',
                                        height: '49px',
                                        borderRadius: menuActive === '/contact' ? '30px' : '0',
                                        border: menuActive === '/contact' ? `1px solid ${palette.black[500]}` : 'none',
                                        backgroundColor: menuActive === '/contact' ? '#FFFFFF' : 'inherit',
                                        '&:hover': {
                                            border: '3px solid #000000',
                                            boxShadow: '3px 4px 0px 2px #000000',
                                            borderRadius: '30px',
                                            background: '#FFFFFF',
                                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        },
                                    }}
                                    onClick={() => handleClickRedux('/contact')}
                                >
                                    Contact
                                </Box>
                                {/* Projects */}
                                <Box
                                    component={Link}
                                    to="/projects"
                                    sx={{
                                        color: 'inherit',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        boxSizing: 'border-box',
                                        padding: '16px 20px',
                                        width: '80px',
                                        height: '49px',
                                        borderRadius: menuActive === '/projects' ? '30px' : '0',
                                        border: menuActive === '/projects' ? `1px solid ${palette.black[500]}` : 'none',
                                        backgroundColor: menuActive === '/projects' ? '#FFFFFF' : 'inherit',
                                        '&:hover': {
                                            border: '3px solid #000000',
                                            boxShadow: '3px 4px 0px 2px #000000',
                                            borderRadius: '30px',
                                            background: '#FFFFFF',
                                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        },
                                    }}
                                    onClick={() => handleClickRedux('/projects')}
                                >
                                    Projects
                                </Box>
                            </Box>

                        </Toolbar>
                    </AppBar>
                </>
            ) : (
                <>
                    <AppBar sx={{
                        zIndex: 40,
                        position: 'static',
                        top: 0,
                        height: '80px',
                        borderBottom: '2px solid black',
                        borderTop: '2px solid black',
                    }}
                    >
                        <Toolbar sx={{ p: 0, height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h1" sx={{
                                fontFamily: 'Playfair Display',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                color: palette.black[900],
                                flexGrow: 1,
                                flex: '1 1 auto',
                                marginLeft: '10px'
                            }}
                            >
                                THEBKS
                            </Typography>
                            <IconButton edge='start' color="inherit" aria-label="menu" sx={{ marginRight: '8px' }}
                                onClick={smallScreenMenuToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </>
            )
            }
            {/* MOBILE VIEW */}
            {
                !isAboveSmallScreen && menuToggled && (
                    <>
                        <Box sx={{
                            position: 'fixed',
                            bottom: 0,
                            right: 0,
                            height: '100%',
                            backgroundColor: palette.primary[500],
                            width: '300px',
                            borderTop: '2px solid black',
                        }}
                        >
                            <Box sx={{ marginTop: 'auto', position: 'absolute', top: 0, right: 0, }}>
                                <IconButton sx={{ p: '12px' }} onClick={smallScreenMenuToggle} >
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            {/* Menu Items */}
                            {/* Home */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                marginLeft: '35%',
                                fontSize: '1rem',
                                color: palette.black[500],
                                marginTop: '50%',
                            }}
                            >
                                <Box
                                    component={Link}
                                    to="/"
                                    sx={{
                                        color: 'inherit',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        boxSizing: 'border-box',
                                        padding: '16px 20px',
                                        width: '80px',
                                        height: '49px',
                                        borderRadius: menuActive === '/' ? '30px' : '0',
                                        border: menuActive === '/' ? `1px solid ${palette.black[500]}` : 'none',
                                        backgroundColor: menuActive === '/' ? '#FFFFFF' : 'inherit',
                                        '&:hover': {
                                            border: '3px solid #000000',
                                            boxShadow: '3px 4px 0px 2px #000000',
                                            borderRadius: '30px',
                                            background: '#FFFFFF',
                                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        },
                                    }}
                                    onClick={() => handleClickRedux('/')}
                                >
                                    Home
                                </Box>
                                {/* features */}
                                <Box
                                    component={Link}
                                    to="/features"
                                    sx={{
                                        color: 'inherit',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        boxSizing: 'border-box',
                                        padding: '16px 20px',
                                        width: '80px',
                                        height: '49px',
                                        borderRadius: menuActive === '/features' ? '30px' : '0',
                                        border: menuActive === '/features' ? `1px solid ${palette.black[500]}` : 'none',
                                        backgroundColor: menuActive === '/features' ? '#FFFFFF' : 'inherit',
                                        '&:hover': {
                                            border: '3px solid #000000',
                                            boxShadow: '3px 4px 0px 2px #000000',
                                            borderRadius: '30px',
                                            background: '#FFFFFF',
                                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        },
                                    }}
                                    onClick={() => handleClickRedux('/features')}
                                >
                                    Features
                                </Box>
                                {/* Contact */}
                                <Box
                                    component={Link}
                                    to="/contact"
                                    sx={{
                                        color: 'inherit',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        boxSizing: 'border-box',
                                        padding: '16px 20px',
                                        width: '80px',
                                        height: '49px',
                                        borderRadius: menuActive === '/contact' ? '30px' : '0',
                                        border: menuActive === '/contact' ? `1px solid ${palette.black[500]}` : 'none',
                                        backgroundColor: menuActive === '/contact' ? '#FFFFFF' : 'inherit',
                                        '&:hover': {
                                            border: '3px solid #000000',
                                            boxShadow: '3px 4px 0px 2px #000000',
                                            borderRadius: '30px',
                                            background: '#FFFFFF',
                                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        },
                                    }}
                                    onClick={() => handleClickRedux('/contact')}
                                >
                                    Contact
                                </Box>
                                {/* Projects */}
                                <Box
                                    component={Link}
                                    to="/projects"
                                    sx={{
                                        color: 'inherit',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        boxSizing: 'border-box',
                                        padding: '16px 20px',
                                        width: '80px',
                                        height: '49px',
                                        borderRadius: menuActive === '/projects' ? '30px' : '0',
                                        border: menuActive === '/projects' ? `1px solid ${palette.black[500]}` : 'none',
                                        backgroundColor: menuActive === '/projects' ? '#FFFFFF' : 'inherit',
                                        '&:hover': {
                                            border: '3px solid #000000',
                                            boxShadow: '3px 4px 0px 2px #000000',
                                            borderRadius: '30px',
                                            background: '#FFFFFF',
                                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                        },
                                    }}
                                    onClick={() => handleClickRedux('/projects')}
                                >
                                    Projects
                                </Box>
                            </Box>
                        </Box>
                    </>
                )
            }
        </>
    )
}

export default Navbar