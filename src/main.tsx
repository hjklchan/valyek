import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// reset css
import "normalize.css";
import "./index.css";
import App from './App';

const theme = extendTheme({
    radii: {
        none: '0',
        sm: '0',
        base: '0',
        md: '0',
        lg: '0',
        xl: '0',
        "2xl": '0',
        "3xl": '0',
        full: '0',
    }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* Chakra UI Provider */}
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
)
