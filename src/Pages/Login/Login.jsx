import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate()

    const [see, setSee] = useState(false)

    const { loginUser, googleLogin } = useContext(AuthContext)

    const login = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        loginUser(email, password)
            .then(() => {
                toast("successful login account")
                navigate('/')
            })
            .catch(error => {
                toast(`${error.message}`)

            })
    }

    const loginWithGoogle = () => {
        googleLogin()
            .then(() => {
                toast("successful login account")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="lg:w-1/3 w-[90%] mx-auto">
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
                    <div className="text-center flex items-center gap-3 mt-5 justify-center">
                        <hr className="border border-black w-[30%]" />
                        <h2 className="text-center text-lg font-medium">or sign in</h2>
                        <hr className="border border-black w-[30%]" />
                    </div>
                    <div className="flex items-center justify-center gap-10">
                        <button onClick={loginWithGoogle} className="btn rounded-full mt-5  bg-red-600 text-white "><FaGoogle className="text-lg"></FaGoogle></button>
                        <button className="btn rounded-full mt-5 btn-primary "><FaGithub className="text-lg"></FaGithub></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;