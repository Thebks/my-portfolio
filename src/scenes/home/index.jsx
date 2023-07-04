import React from 'react'
import { Grid, Typography, Box, Button, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'mui-image'
import { motion } from 'framer-motion';


function Home() {
    const isAboveLargeScreen = useMediaQuery("(min-width: 768px)");
    const { palette } = useTheme();


    // TESTCODE
    /* Subtract */



    // TESTCODE

    return (
        <Box sx={{ py: 10 }} component='section'>
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
                                <Image
                                    alt="profile"
                                    src={require('../../assets/cryptoDog.jpeg')}
                                    sx={{
                                        width: '100%',
                                        maxWidth: '400px',
                                        borderRadius: '200px 200px 0 0',
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
                                        variant="h3"
                                        component="p"
                                        align="center"
                                        sx={{
                                            fontSize: '6xl',
                                            fontFamily: 'Playfair Display, serif',
                                            position: 'relative',
                                            zIndex: 10,
                                            '& span': {
                                                position: 'relative',
                                                zIndex: 20,
                                                color: palette.primary[500],
                                                fontWeight: 'bold',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: '-25px',
                                                    top: '-70px',
                                                    zIndex: -1,
                                                    color: 'brush',
                                                    borderRadius: '0',
                                                },
                                            },
                                        }}>The <span>Big</span>  Hello</Typography>
                                    <Typography
                                        variant="body1"
                                        align="center"
                                        sx={{
                                            mt: 2,
                                            fontSize: 'sm',
                                        }}
                                    >
                                        Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
                                    </Typography>
                                </motion.div>
                            </Box>
                        </Box>
                    </Grid>
                </>
            </Grid>
        </Box>
    );
}


export default Home;