import React from 'react'
import {createRoot} from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './components/Dashboard';

// root element
const root = createRoot(
    document.getElementById('app') as HTMLElement
);

const theme =
    createTheme({
        pallet: {
            primary: {
                main: '#556cd6',
            },
            // other custimeze..
        },
    });

const App = () => {

    return (
        <>
            <Dashboard />
        </>
    );
};

root.render(<App />)
