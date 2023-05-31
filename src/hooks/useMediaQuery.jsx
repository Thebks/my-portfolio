import React, { useState, useEffect } from 'react'

const useMediaQuery = (query) => {
    const { matches, setMatches } = useState(false);

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