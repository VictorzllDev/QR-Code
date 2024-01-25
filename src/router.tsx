import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import App from './App.tsx'
import ErrorPage from './pages/ErrorPage/index.tsx'

const router = createBrowserRouter([
  {
    path: '/QR-Code',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: '/QR-Code',
        element: <Home />,
      },
    ],
  },
])

export default router
