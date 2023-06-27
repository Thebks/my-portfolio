import React from 'react'
import { setMenuActive, toggleMenu } from './menuActiveLinkSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, useTheme } from '@mui/material';
import { Link } from "react-router-dom"

const DotGroup = () => {

    const dispatch = useDispatch();
    const { menuActive, menuToggled } = useSelector((state) => state.menuActiveLink);
    const { palette } = useTheme();


    const handleClickRedux = (to) => {
        dispatch(setMenuActive(to));
    }


    const selectedStyles = {
        position: 'relative',
        backgroundColor: palette.secondary[500],
        '&::before': {
            content: '""',
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            borderWidth: '2px',
            borderColor: palette.secondary[500],
            left: '-50%',
            top: '-50%',
        },
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'fixed', top: '60%', right: '7px' }}>
            <Box
                to="/"
                component={Link}
                sx={{
                    ...((menuActive === "/") ? selectedStyles : { backgroundColor: palette.green[500] }),
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                }}
                onClick={() => handleClickRedux("/")}
                smooth="true"
            />

            {/*FEATURES*/}
            <Box
                to="/features"
                component={Link}
                sx={{
                    ...((menuActive === "/features") ? selectedStyles : { backgroundColor: palette.green[500] }),
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                }}
                onClick={() => handleClickRedux("/features")}
                smooth="true"
            />

            {/* CONTACTS */}
            <Box
                to="/contact"
                component={Link}
                sx={{
                    ...((menuActive === "/contact") ? selectedStyles : { backgroundColor: palette.green[500] }),
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                }}
                onClick={() => handleClickRedux("/contact")}
                smooth="true"
            />

            {/* PROJECTS */}
            <Box
                to="/projects"
                component={Link}
                sx={{
                    ...((menuActive === "/projects") ? selectedStyles : { backgroundColor: palette.green[500] }),
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                }}
                onClick={() => handleClickRedux("/projects")}
                smooth="true"
            />
        </Box>
    )
}


export default DotGroup;
