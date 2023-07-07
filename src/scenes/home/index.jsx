import React from 'react'
import { Grid, Typography, Box, Button, useTheme } from '@mui/material';
import { Link, NavLink } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Home() {
    const isAboveLargeScreen = useMediaQuery("(min-width: 1060px)");
    const { palette } = useTheme();


    return (
        <Box sx={{ py: 10, border: '3px solid black', width: '100vw', height: '100vh' }} component='section'>
            <Grid container justifyContent="space-between" alignItems="center" spacing={2} border="2px solid black">
                <>
                    {isAboveLargeScreen ? (
                        <>
                            {/* Image Section */}
                            <Grid xs={12} md={6} item order={isAboveLargeScreen ? 1 : 0}>
                                <Box sx={{
                                    position: 'relative',
                                    width: '360px',
                                    height: '506px',
                                    top: '-12px',
                                    left: '365px',
                                    '&:hover': {
                                        transform: 'scale(1.01)',
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        zIndex: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: '3px solid black',
                                        borderRadius: '150px 30px 30px 30px ',
                                        background: palette.green[500],
                                        boxShadow: '10px 10px 0px rgba(0, 0, 0, 1)',
                                        overflow: 'hidden',
                                    }
                                }}>
                                    <Box
                                        component="img"
                                        alt="ppp"
                                        src={require('../../assets/cryptoDog.jpeg')}
                                        sx={{
                                            position: 'relative',
                                            top: '-5px',
                                            left: '175px',
                                            transform: 'translateX(-50%)',
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%',
                                            transition: 'filter 0.5s ease-in-out',
                                            borderRadius: '150px 30px 30px 30px',
                                            border: '3px solid',
                                            zIndex: 1,
                                            '&:hover': {
                                                filter: 'saturate(200%)',
                                                transitionDuration: '500ms',
                                            },
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid xs={12} md={6} item >
                                <Box
                                    component="img"
                                    alt="profile"
                                    src={require('../../assets/cryptoDog.jpeg')}
                                    sx={{
                                        width: '100%',
                                        maxWidth: '400px',
                                        border: '5px solid black',
                                        overflow: 'hidden',
                                        borderRadius: '150px 30px 30px 30px',
                                    }}
                                />
                            </Grid>
                        </>
                    )}
                    {/* MAIN TEXT */}
                    <Grid item xs={12} md={6} order={isAboveLargeScreen ? 0 : 1}>
                        <Box sx={{ ml: { md: 2 } }}>
                            {/* HEADINGS */}
                            <Box>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}>
                                    <Typography
                                        variant="h1"
                                        align="center"
                                        sx={{
                                            fontSize: '6rem',
                                            fontFamily: 'Playfair Display',
                                            zIndex: 10,
                                            textAlign: { md: 'start' },
                                            position: 'relative',
                                        }}
                                    >
                                        The{' '}
                                        <Typography
                                            component="span"
                                            variant="h1"
                                            fontWeight="bold"
                                            sx={{
                                                position: { xs: 'relative' },
                                                color: palette.green[500],
                                                zIndex: { xs: 20 },
                                                '&::before': {
                                                    content: "''",
                                                    position: 'absolute',
                                                    left: '-25px',
                                                    top: '-70px',
                                                    zIndex: -1,
                                                },
                                            }}
                                        >
                                            Hello
                                        </Typography>
                                    </Typography>

                                    <Typography
                                        variant="h2"
                                        align="center"
                                        sx={{
                                            mt: 10,
                                            mb: 7,
                                            fontSize: '0.875rem',
                                            textAlign: { md: 'start' },
                                        }}
                                    >
                                        Hello, I'm Bilal Khan, a passionate and dedicated web developer. <br />  With 2 years of experience in the industry, I have honed my skills in creating dynamic and user-friendly websites.
                                    </Typography>
                                </motion.div>

                                {/* CALL TO ACTIONS */}
                                <Box
                                    sx={{
                                        mt: 5,
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'start' },
                                        justifyContent: { xs: 'center', md: 'start' },
                                        flex: '1 1 auto',
                                        gap: 2
                                    }}
                                >
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        variants={{
                                            hidden: { opacity: 0, x: -50 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        <Box sx={{ mb: { xs: 2, md: 0 } }}>
                                            <Button component={Link} onClick={() => console.log("Button Clicked")}
                                                sx={{
                                                    background: palette.secondary[500],
                                                    color: palette.green[900],
                                                    borderRadius: '4px',
                                                    padding: '8px 16px',
                                                    fontWeight: 'bold',
                                                    textDecoration: 'none',
                                                    transition: 'background-color 0.3s ease',
                                                    '&:hover': {
                                                        backgroundColor: '#0044FF',
                                                        color: '#FFFFFF',
                                                    },
                                                }}>
                                                <Typography variant="body1">Contact Me</Typography>
                                            </Button>
                                        </Box>
                                    </motion.div>

                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                        variants={{
                                            hidden: { opacity: 0, x: -50 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                    >
                                        {/* SSOCIAL MEDIA iCONS */}
                                        <Box sx={{ display: 'flex', gap: '16px', alignItems: "center" }}>
                                            {/* TWITTER */}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    border: '2px solid black',
                                                    borderRadius: '50%',
                                                    width: 50,
                                                    height: 50,
                                                    mt: 2,
                                                    backgroundColor: palette.purple[500]
                                                }}
                                            >
                                                <TwitterIcon sx={{
                                                    color: palette.black[400],
                                                    fontSize: 32
                                                }} />
                                            </Box>
                                            {/* GITHUB */}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    border: '2px solid black',
                                                    borderRadius: '50%',
                                                    width: 50,
                                                    height: 50,
                                                    mt: 2,
                                                    backgroundColor: palette.purple[500]
                                                }}
                                            >
                                                <GitHubIcon sx={{
                                                    color: palette.black[500],
                                                    fontSize: 32
                                                }} />
                                            </Box>
                                            {/* LINKEDIN iCON */}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    border: '2px solid black',
                                                    borderRadius: '50%',
                                                    width: 50,
                                                    height: 50,
                                                    mt: 2,
                                                    backgroundColor: palette.purple[500]
                                                }}
                                            >
                                                <LinkedInIcon sx={{
                                                    color: palette.black[500],
                                                    fontSize: 32
                                                }} />
                                            </Box>
                                        </Box>
                                    </motion.div>
                                </Box>

                            </Box>
                        </Box>
                    </Grid>
                </>
            </Grid >
        </Box >
    );
}


export default Home;