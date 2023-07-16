import React from 'react'
import { Box, Link, useTheme } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialMedia = () => {
    const { palette } = useTheme();
    return (
        <Box sx={{ display: 'flex', gap: '16px', alignItems: "center", marginTop: 5 }}>
            <Link
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px solid black',
                    borderRadius: '50%',
                    width: 50,
                    height: 50,
                    mt: 2,
                    backgroundColor: palette.primary[500],
                    boxShadow: `2px 3px 0px 2px ${palette.black[900]}`,
                    transition: ' 0.1s ease',
                    '&:hover': {
                        outline: `1px solid ${palette.black[500]}`,
                        boxShadow: `1px 2px 0px 2px ${palette.black[500]}`,
                        background: '#FFFFFF',
                        // textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',   
                        transform: 'translate(-4px, -4px)'
                    }
                }}
            >
                <TwitterIcon sx={{
                    color: palette.black[400],
                    fontSize: 32,
                }} />
            </Link>
            {/* GITHUB */}
            <Link
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px solid black',
                    borderRadius: '50%',
                    width: 50,
                    height: 50,
                    mt: 2,
                    backgroundColor: palette.primary[500],
                    boxShadow: `2px 3px 0px 2px ${palette.black[900]}`,
                    transition: ' 0.1s ease',
                    '&:hover': {
                        outline: `1px solid ${palette.black[500]}`,
                        boxShadow: `1px 2px 0px 2px ${palette.black[500]}`,
                        background: '#FFFFFF',
                        // textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',   
                        transform: 'translate(-4px, -4px)'
                    }
                }}
            >
                <GitHubIcon sx={{
                    color: palette.black[500],
                    fontSize: 32
                }} />
            </Link>
            {/* LINKEDIN iCON */}
            <Link
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px solid black',
                    borderRadius: '50%',
                    width: 50,
                    height: 50,
                    mt: 2,
                    backgroundColor: palette.primary[500],
                    boxShadow: `2px 3px 0px 2px ${palette.black[900]}`,
                    transition: ' 0.1s ease',
                    '&:hover': {
                        outline: `1px solid ${palette.black[500]}`,
                        boxShadow: `1px 2px 0px 2px ${palette.black[500]}`,
                        background: '#FFFFFF',
                        // textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',   
                        transform: 'translate(-4px, -4px)'
                    }
                }}
            >
                <LinkedInIcon sx={{
                    color: palette.black[500],
                    fontSize: 32
                }} />
            </Link>
        </Box>
    )
}

export default SocialMedia