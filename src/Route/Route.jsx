import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";
import Login from "../Pages/Login/Login";

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
            },
            {
                path: '/login',
                element: <Login></Login>
            }
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default Route;