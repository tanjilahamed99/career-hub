import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return alert('login first')
    }
    else {
        return children
    }
};

export default PrivateRoute;