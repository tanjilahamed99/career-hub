import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, stay } = useContext(AuthContext)
    if (stay) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    else if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    else {
        return children
    }
};


PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;