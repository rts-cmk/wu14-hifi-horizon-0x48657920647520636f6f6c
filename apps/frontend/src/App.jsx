import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"
import Faq from "./pages/Faq"
import About from "./pages/About"
import LoginPage from "./pages/Login"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import RegisterPage from "./pages/Register"
import Details from "./pages/Details"

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
        element: <Home/>,
        loader: async () => {
          const products = await fetch("/api/categories/1").then(response => response.json())

          return { products }
        },
        hydrateFallbackElement: <p>loading...</p>
      },
      {
        path: "/products",
        element: <Products/>,
        loader: async () => {
          const products = await fetch("/api/products").then(response => response.json())
          const categories = await fetch("/api/categories").then(response => response.json())

          return { products, categories }
        },
        hydrateFallbackElement: <p>loading...</p>
      },
      {
        path: "/details/:productId",
        element: <Details/>,
        loader: async () => {
          const products = await fetch("/api/products").then(response => response.json())

          return { products }
        },
        hydrateFallbackElement: <p>loading...</p>
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
