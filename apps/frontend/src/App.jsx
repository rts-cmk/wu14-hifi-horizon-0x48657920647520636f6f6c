import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"

function App() {
const browserRouter = createBrowserRouter([{
    element: <Layout/>,
    loader: async () => {
      const categories = await fetch("/api/categories").then(response => response.json())

      return {categories}
    },
    children: [
      {
        path: "/",
        element: <p>Webpage</p>
      },
      {
        path: "/shop",
        element: <p>Shop</p>
      }
    ]
  }])

  return (
    <RouterProvider router={browserRouter}/>
  )
}

export default App
