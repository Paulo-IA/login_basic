import { useRoutes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { SignUp } from '../pages/SignUp'
import { Dashboard } from '../pages/Dashboard'
import { NotFound } from '../pages/NotFound'

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Login /> },
        { path: '/cadastro', element: <SignUp /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '*', element: <NotFound /> },
    ])
}