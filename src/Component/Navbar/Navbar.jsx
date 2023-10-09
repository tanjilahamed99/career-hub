import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)


    const logoutUser = () => {
        logout()
            .then(() => {
                toast("successful logout")
            })
            .catch(error => {
                toast(`${error.message}`)
            })
    }

    const ulLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-600" : ""
            }
        >
            Home
        </NavLink></li>



        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-600" : ""
            }
        >
            Blog
        </NavLink></li>

        <li><NavLink
            to="/registration"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-purple-600" : ""
            }
        >
            Registration
        </NavLink></li>

        {
            user && <> <li><NavLink
                to="/appliedJob"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-purple-600" : ""
                }
            >
                Applied Jobs
            </NavLink></li>
                <li><NavLink
                    to="/employers"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-purple-600" : ""
                    }
                >
                    Employers
                </NavLink></li>
            </>
        }

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            ulLink
                        }
                    </ul>
                </div>
                <a className="font-bold  normal-case text-2xl">Car<span className="text-purple-600">ee</span>r</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium text-lg">
                    {
                        ulLink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <img className="w-10" src={user.photoURL} alt="" /> : <img className="w-10" src="https://i.ibb.co/gvsBmQR/pngwing-com-22.png" alt="" />
                }
                {
                    user && <h2 className="md:mx-3 hidden md:inline">{user.displayName}</h2>
                }
                {
                    user ? <button onClick={logoutUser} className="btn bg-base-100">Logout</button> : <Link to={'/login'}><button className="btn bg-base-100">login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;