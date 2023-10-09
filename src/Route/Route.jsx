import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import AppliedJob from "../Pages/AppliedJob/AppliedJob";
import Error from "../Pages/Error/Error";
import Employs from "../Pages/Employs/Employs";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/detail/:id',
                element: <PrivateRoute><Detail></Detail></PrivateRoute>,
                loader: () => fetch('../service.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/appliedJob',
                element: <AppliedJob></AppliedJob>
            },
            {
                path: '/employs',
                element: <Employs></Employs>
            }
        ]
    }
])

export default Route;