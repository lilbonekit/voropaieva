import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import { router } from './routes/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router}/>
  </ChakraProvider>
)
