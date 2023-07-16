import React from 'react'
import { SvgIcon } from '@mui/material';




const BoxDesign = () => {


    return (
        <SvgIcon
            sx={{
                width: 191,
                height: 191,
                display: 'inline-block',
                verticalAlign: 'middle',
            }}
        >
            <line
                sx={{
                    stroke: 'black',
                    strokeWidth: 3,
                }}
                x1="70.4597"
                y1="0.919159"
                x2="70.4597"
                y2="190.919"
            />
            <line
                sx={{
                    stroke: 'black',
                    strokeWidth: 3,
                }}
                x1="124.259"
                y1="0.919159"
                x2="124.259"
                y2="190.919"
            />
            <line
                sx={{
                    stroke: 'black',
                    strokeWidth: 3,
                }}
                x1="190.859"
                y1="70.5197"
                x2="0.859131"
                y2="70.5197"
            />
            <line
                sx={{
                    stroke: 'black',
                    strokeWidth: 3,
                }}
                x1="190.859"
                y1="124.319"
                x2="0.859127"
                y2="124.319"
            />
            <circle
                sx={{
                    fill: 'black',
                }}
                cx="70.0695"
                cy="70.1973"
                r="8.28618"
            />
            <circle
                sx={{
                    fill: 'black',
                }}
                cx="124.609"
                cy="70.1973"
                r="6.39854"
            />
            <circle
                sx={{
                    fill: 'black',
                }}
                cx="124.609"
                cy="123.819"
                r="8.22667"
            />
            <circle
                sx={{
                    fill: 'black',
                }}
                cx="70.0696"
                cy="123.819"
                r="5.48895"
            />
        </SvgIcon>
    );
}

export default BoxDesign