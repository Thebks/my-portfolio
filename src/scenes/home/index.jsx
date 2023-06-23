import React from 'react'
import { Grid, Typography, Box, Button, useTheme } from '@mui/material';
import useMediaQuery from "../../hooks/useMediaQuery"
import Image from 'mui-image'



function Home() {
    const isAboveLargeScreen = useMediaQuery("(min-width: 1060px)");
    const { palette } = useTheme();

    return (
        <Box sx={{ py: 10 }} component='section'>
            <Grid container justifyContent="space-between" alignItems="center" spacing={2}>

                {/* Image Section */}
                <Grid xs={12} md={6} item>
                    {isAboveLargeScreen ? (
                        <Box sx={{
                            position: 'relative', ml: 2,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: '-20px',
                                left: '-20px',
                                zIndex: -1,
                                width: '100%',
                                maxWidth: '400px',
                                height: '100%',
                                border: '2px solid blue',
                                borderRadius: '400px 400px 0 0'
                            }
                        }}>
                            <Image
                                alt='ppp'
                                src={require('../../assets//profile-image.png')}
                                sx={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    '&:hover': {
                                        filter: 'saturate(200%)',
                                        transition: 'duration 500ms',
                                    },
                                }}
                            />
                        </Box>
                    ) : (
                        <img
                            alt="profile"
                            src="assets/CryptDog.jpeg"
                            sx={{
                                width: '100%',
                                maxWidth: '400px',
                            }}
                        />
                    )}
                </Grid>
            </Grid>

        </Box>
    );
}



export default Home;



