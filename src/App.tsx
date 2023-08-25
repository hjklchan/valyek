import { RouterProvider } from 'react-router-dom'
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";
import { appRouter } from './routes'
import { AppProvider } from './contexts/AppProvider';

function App() {

    return (
        <StoreProvider store={store}>
            <AppProvider>
                <RouterProvider router={appRouter} />
            </AppProvider>
        </StoreProvider>
    )
}

export default App;
