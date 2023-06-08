import React from 'react'
import { Button, Box, Container, Typography, Grid } from '@mui/material'
import useMediaQuery from '../../hooks/useMediaQuery'

const Home = () => {
    const isBigScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <Box>
            <Grid container spacing={2} direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={12}>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant='h1'>
                                ijwnviwnovinwirvnwirvniwerjnviwnrviwrnviwrejnv
                            </Typography>
                            <Button variant="contained">Click here</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography>wiuvbiwubviwubvriwueri</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home


