import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/styles/App.css'
import { About, ContactUs, Home, Services, HomeLayOut, Github, Resume } from "./pages"
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
      },
      {
        path:"github",
        element:<Github />,
      },
      {
        path:"resume",
        element:<Resume />,
      }
    ]
  },
])

function App() {
  
return <RouterProvider router={router} /> 
    
}

export default App
