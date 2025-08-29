import { createBrowserRouter } from 'react-router-dom'

import { routes } from './constants/routes'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import RequestsPage from './pages/RequestsPage'
import CreateRequestPage from './pages/CreateRequestPage'
import MyRequestsPage from './pages/MyRequestsPage'
import ProfilePage from './pages/ProfilePage'
import RootLayout from './components/layouts/RootLayout'
import NotFoundPage from './pages/NotFoundPage'
import ContactsPage from './pages/ContactsPage'
import RequestPage from './pages/RequestPage'
import RequestsLayout from './components/layouts/RequestsLayout'
import AboutPage from './pages/AboutPage'
import PartnersPage from './pages/PartnersPage'
import SupportUsPage from './pages/SupportUsPage'

export const router = createBrowserRouter([
    {
        path: `${routes.home}`,
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: routes.about, element: <AboutPage /> },
            { path: routes.partners, element: <PartnersPage /> },
            { path: routes.supportUs, element: <SupportUsPage /> },
            { path: routes.contacts, element: <ContactsPage /> },
            { path: routes.profile, element: <ProfilePage /> },

            {
                path: routes.requests,
                element: <RequestsLayout />,
                children: [
                    { index: true, element: <RequestsPage /> },
                    {
                        path: routes.createRequest,
                        element: <CreateRequestPage />,
                    },
                    { path: routes.myRequests, element: <MyRequestsPage /> },
                    {
                        path: routes.request,
                        element: <RequestPage />,
                    },
                ],
            },

            { path: routes.register, element: <RegisterPage /> },
            { path: routes.login, element: <LoginPage /> },
        ],
    },
    { path: '*', element: <NotFoundPage /> },
])
