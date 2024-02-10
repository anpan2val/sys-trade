import React from 'react'
import {createRoot} from 'react-dom/client'
import {CssBaseline} from '@mui/material'
import ApexChart from "./ApexChart";

// root element
const root = createRoot(
    document.getElementById('app') as HTMLElement
);

const App = () => {

    return (
        <>
            <CssBaseline />
            <ApexChart />
        </>
    );

};

root.render(<App />)
