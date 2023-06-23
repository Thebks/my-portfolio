import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'mui-image'


const Features = () => {
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <section>
            <Box >

                <Image alt='ppp'
                    src={require('../../assets//profile-image.png')}
                    sx={{
                        width: '100%',
                        maxWidth: '400px',
                        '&:hover': {
                            filter: 'saturate(200%)',
                            transition: 'duration 500ms',
                        },
                    }}
                    onClick={handleClick}
                />
            </Box>
        </section>
    )
}

export default Features