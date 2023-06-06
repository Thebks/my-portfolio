import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import useMediaQuery from '../../hooks/useMediaQuery'

const Home = () => {
    const isBigScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <Box sx={{
            backgroundColor: 'red', display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            height: '100%',
            paddingTop: '10px',
            paddingBottom: '10px',
        }}>

            <Box sx={{ position: 'absolute', width: '600px', height: '140px', left: '82px', top: '480px' }}>
                <Container>
                    <Typography variant='h1' >
                        Whats up man, Hire me and so I can make money. Do not miss the chance of hiring me because if you do they I wont have a job
                    </Typography>
                </Container>
            </Box>
        </Box>
    )
}

export default Home



// position: absolute;
// width: 602px;
// height: 139px;
// left: 82px;
// top: 480px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 25px;
// line-height: 40px;
// /* or 160% */
// letter-spacing: 0.02em;

// color: rgba(0, 0, 0, 0.7);



// /* Prepare for Success with StudyBoost */

// position: absolute;
// width: 576px;
// height: 140px;
// left: 81px;
// top: 310px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 700;
// font-size: 55px;
// line-height: 70px;
// /* or 127% */
// letter-spacing: 0.02em;

// color: #000000;

