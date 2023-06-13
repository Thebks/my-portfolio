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

{/* <Button
                                onClick={handleButtonClick}
                                text="Login"
                                sx={{
                                    backgroundColor: 'rgba(0, 0, 0, 1)',
                                    height: "100%",
                                    width: '195px',
                                    variant: "outlined",
                                    borderRadius: 0,
                                    color: 'white',
                                    "&:hover": {
                                        backgroundColor: 'rgba(0, 0, 0, 1)',
                                        textShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
                                        boxShadow: '3px 4px 0px 2px #000000',
                                    },
                                }}
                            /> */}