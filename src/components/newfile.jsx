import React from 'react'
import { Box, Typography, useTheme } from "@mui/material"

const NewFile = () => {
    const { palette } = useTheme();

    return (
        <Box>
            <Typography color={palette.primary[500]} variant='h2'>Im a girl</Typography>
        </Box>
    )
}

export default NewFile