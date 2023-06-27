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
                                    position: 'relative', ml: 2,
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '-10px',
                                        left: '320px',
                                        zIndex: 0,
                                        width: '420px',
                                        maxWidth: '400px',
                                        height: '575px',
                                        border: '2px solid',
                                        borderColor: palette.primary[500],
                                        borderRadius: '120px 30px 30px 30px'
                                    }
                                }}>
                                    <Image
                                        alt='ppp'
                                        src={require('../../assets/cryptoDog.jpeg')}
                                        sx={{
                                            top: '-8px',
                                            left: '55px',
                                            width: '100%',
                                            maxWidth: '400px',
                                            transition: 'filter 0.5s ease-in-out',
                                            borderRadius: '120px 30px 30px 30px',
                                            '&:hover': {
                                                filter: 'saturate(200%)',
                                                transitionDuration: '500ms',
                                                transform: 'scale(1.01)',
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
                    </Grid>
                </>
            </Grid>
        </Box>
    );
}


export default Home;