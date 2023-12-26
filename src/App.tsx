import { RouterProvider } from 'react-router-dom'
import './globals.css'
import {Toaster} from 'sonner'

import { router } from './routes'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { ThemeProvider } from './components/theme/theme-provider'

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
        <Helmet titleTemplate='%s | pizza.shop'/>
        <RouterProvider router={router}></RouterProvider>
        <Toaster richColors></Toaster>
      </ThemeProvider>
      
    </HelmetProvider>
    
  )
}
