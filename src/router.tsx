import { createBrowserRouter } from 'react-router-dom'
import App from './App'

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/register', element: <App /> },
    { path: '/login', element: <App /> },
    { path: '/requests', element: <App /> },
    { path: '/requests/create', element: <App /> },
    { path: '/requests/my', element: <App /> },
    { path: '/profile', element: <App /> },
])
