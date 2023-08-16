import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
// reset css
import "normalize.css";
import "./index.css";
import App from './App';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* Chakra UI Provider */}
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
)
