import PropTypes from 'prop-types';
import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase/congig';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
};


export default AuthProvider;