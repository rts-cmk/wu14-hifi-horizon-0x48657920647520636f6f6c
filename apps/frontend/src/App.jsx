import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"

function App() {
const browserRouter = createBrowserRouter([{
    element: <Layout/>,
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
