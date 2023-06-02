import React from 'react'
import { Button as MuiButton } from '@mui/material'

const Button = ({ onClick, sx, text }) => {
    return (
        <MuiButton onClick={onClick} sx={sx}>
            {text}
        </MuiButton>
    )
}

export default Button