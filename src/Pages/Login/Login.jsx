import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const navigate = useNavigate()

    const [see, setSee] = useState(false)

    const { loginUser } = useContext(AuthContext)
    const login = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        loginUser(email, password)
            .then(() => {
               navigate('/')
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="w-1/3 mx-auto">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-3">Login now!</h1>
                    </div>
                    <div className=" w-full shadow-2xl bg-base-100">
                        <form onSubmit={login} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label ">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type={see ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                {
                                    see ? <FaEye onClick={() => setSee(!see)} className="absolute right-2 bottom-12 text-xl"></FaEye> : <FaEyeSlash onClick={() => setSee(!see)} className="absolute right-2 bottom-12 text-xl"></FaEyeSlash>
                                }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>New here? <Link to={'/registration'}><span className="text-purple-600 font-bold">Create account</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;