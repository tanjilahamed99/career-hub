import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/detail/:id',
                element: <Detail></Detail>,
                loader: () => fetch('../service.json')
            }
        ]
    }
])

export default Route;