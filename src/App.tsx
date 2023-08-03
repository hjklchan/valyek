import { RouterProvider } from 'react-router-dom'
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";
import { appRouter } from './routes'

function App() {

  return (
    <StoreProvider store={store}>
      <RouterProvider router={appRouter} />
    </StoreProvider>
  )
}

export default App
