import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const useStyles = makeStyles((theme) => ({
    selectedStyles: {
        position: 'relative',
        backgroundColor: 'yellow',
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            borderWidth: '2px',
            borderColor: 'yellow',
            left: '-50%',
            top: '-50%',
        },
    },
}));

const DotGroup = () => {
    return (
        <Box sx={{ display: 'flex', felxDirection: 'column', gap: '1.5rem', position: 'fixed', top: '60%', right: '7px' }}>
            <Link
                to="/"
                component={Box}
                sx={{
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    backgroundColor: location.pathname === "/" ? "yellow" : "darkgrey",
                }}
            />
        </Box>
    )
}

export default DotGroup