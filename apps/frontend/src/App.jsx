import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"
import Faq from "./pages/Faq"
import About from "./pages/About"
import LoginPage from "./pages/Login"
import Home from "./pages/Home"

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
        path: "/shop",
        element: <p>Shop</p>
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
      }
    ]
  }])

  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App
