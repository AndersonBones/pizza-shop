import {createBrowserRouter} from 'react-router-dom'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Orders } from './pages/app/orders/orders'
import { NotFoundPage } from './pages/404'

export const router = createBrowserRouter([

    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<NotFoundPage/>,
        children:[
            {path:'/', element:<Dashboard/>},
            {path:'/orders', element:<Orders/>}
        ],
    },

    {
        path:'/',
        element:<AuthLayout/>,
        children:[
            {path:'/signin', element:<SignIn/>},
            {path:'/sign-up', element:<SignUp/>}
        ],
    }
])