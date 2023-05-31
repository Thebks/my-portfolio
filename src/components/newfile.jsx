import React from 'react'
import { Box, Typography, useTheme } from "@mui/material"

const NewFile = () => {
    const { palette } = useTheme();

    return (
        <Box>
            <Typography>Im a boy</Typography>
        </Box>
    )
}

export default NewFile