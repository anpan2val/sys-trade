import React from 'react'
import {createRoot} from 'react-dom/client'
import {CssBaseline} from '@mui/material'
import ApexChart from "./ApexChart";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

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
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </ThemeProvider>
        </>
    );
};

root.render(<App />)
