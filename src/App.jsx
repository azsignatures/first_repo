import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/App.css'
import { About, ContactUs, Home, Services, HomeLayOut} from "./pages"
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"about",
        element: <About />,
      },
      {
        path:"services",
        element: <Services />,
      },
      {
        path:"contactus",
        element:<ContactUs />,
      }
    ]
  },
])

function App() {
  
return <RouterProvider router={router} /> 
    
}

export default App
