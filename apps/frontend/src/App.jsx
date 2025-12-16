import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"
import Faq from "./pages/Faq"
import About from "./pages/About"
import LoginPage from "./pages/Login"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import RegisterPage from "./pages/Register"

function App() {
  const browserRouter = createBrowserRouter([{
    element: <Layout />,
    loader: async () => {
      const categories = await fetch("/api/categories").then(response => response.json())

      return { categories }
    },
    hydrateFallbackElement: <p>loading...</p>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/faq",
        element: <Faq />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/register",
        element: <RegisterPage />
      }
    ]
  }])

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
