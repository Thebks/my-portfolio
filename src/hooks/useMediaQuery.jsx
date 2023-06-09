import { Toolbar } from '@mui/material';
import React, { useState, useEffect } from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);

        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listeners = () => setMatches(media.matches);

        window.addEventListener('resize', listeners)
        return () => window.removeEventListener('resize', listeners);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;

// const isAboveSmallScreen = useMediaQuery("(min-width:768px)");
// <Toolbar sx={{ p: 0, height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//     {isAboveSmallScreen ? (
//         {/* Content */ }
//     ) : (
//         <Box>
//             <IconButton edge='start' color="inherit" aria-label="menu" sx={{ marginLeft: '8px' }}>
//                 <MenuIcon onClick={() => setIsMenuToggled(!isMenuToggled)} />
//             </IconButton>
//             {isAboveSmallScreen && isMenuToggled && (
//                 <Box sx={{ position: 'fixed', right: 0, bottom: 0, height: '100%', backgroundColor: palette.green[500], width: '300px' }}>
//                     <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 12 }}>
//                         <IconButton>
//                             <MenuIcon onClick={() => setIsMenuToggled(!isMenuToggled)} />
//                         </IconButton>
//                     </Box>

//                     {/* Menu Items */}


//                 </Box>
//             )}
//         </Box>
//     )}
// </Toolbar>