import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import useMediaQuery from '../../hooks/useMediaQuery'
import Grid from '@mui/material/Grid'

const Home = () => {
    const isBigScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <Box sx={{
            // backgroundColor: 'red',
            // display: 'flex',
            // justifyContent: 'space-between',
            // alignItems: 'center',
            // gap: '16px',
            // height: '100%',
            // paddingTop: '10px',
            // paddingBottom: '10px',
        }}>

            <Grid container spacing={2} alignItems="center" justifyContent="space-between" backgroundColor='red'>

                <Box sx={{ position: 'absolute', width: '600px', height: '140px', left: '82px', top: '480px' }}>
                    <Container>
                        <Typography variant='h1'>
                            Whats up man, Hire me and so I can make money. Do not miss the chance of hiring me because if you do they I wont have a job
                        </Typography>
                    </Container>
                </Box>
            </Grid>
        </Box>
    )
}

export default Home


