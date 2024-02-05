import React from 'react'
import {createRoot} from 'react-dom/client'
import {CssBaseline} from '@mui/material'

// root element
const root = createRoot(
    document.getElementById('app') as HTMLElement
);

// App component
const App = () => {

    return (
        <>
            <CssBaseline />
            <p>Hello React !</p>
        </>
    );
};

root.render(<App />)
