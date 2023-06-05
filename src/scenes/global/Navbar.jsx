import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from "../../hooks/useMediaQuery"
import { AppBar, Box, Toolbar, Typography, makeStyles, useTheme } from '@mui/material';
import Button from '../../components/Button';
import { Link, NavLink } from 'react-router-dom'
import { setMenuActive } from './menuActiveLinkSlice';
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
    const dispatch = useDispatch();                   //Redux method
    const activeLinkCircle = useSelector((state) => state.menuActiveLink);
    const { palette } = useTheme();


    const handleButtonClick = () => console.log("you clicked me");

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
                            borderRadius: activeLinkCircle === '/' ? '30px' : '0',
                            border: activeLinkCircle === '/' ? `1px solid ${palette.black[500]}` : 'none',
                            backgroundColor: activeLinkCircle === '/' ? '#FFFFFF' : 'inherit',
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
                            borderRadius: activeLinkCircle === '/features' ? '30px' : '0',
                            border: activeLinkCircle === '/features' ? `1px solid ${palette.black[500]}` : 'none',
                            backgroundColor: activeLinkCircle === '/features' ? '#FFFFFF' : 'inherit',
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
                            borderRadius: activeLinkCircle === '/contact' ? '30px' : '0',
                            border: activeLinkCircle === '/contact' ? `1px solid ${palette.black[500]}` : 'none',
                            backgroundColor: activeLinkCircle === '/contact' ? '#FFFFFF' : 'inherit',
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
                            borderRadius: activeLinkCircle === '/projects' ? '30px' : '0',
                            border: activeLinkCircle === '/projects' ? `1px solid ${palette.black[500]}` : 'none',
                            backgroundColor: activeLinkCircle === '/projects' ? '#FFFFFF' : 'inherit',
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
                    {/* I have used the reduxtoolkit method  here */}
                </Box>
                <Button
                    onClick={handleButtonClick}
                    text="Login"
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 1)',
                        height: "100%",
                        width: '195px',
                        variant: "outlined",
                        borderRadius: 0,
                        color: 'white',
                        "&:hover": {
                            backgroundColor: 'rgba(0, 0, 0, 1)'
                        },
                    }}
                />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar