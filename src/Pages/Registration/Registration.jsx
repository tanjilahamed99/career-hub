import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/congig";
import toast from "react-hot-toast";

const Registration = () => {

    const navigate = useNavigate()

    const [see, setSee] = useState(false)
    const { createUser, googleLogin, githubLogin } = useContext(AuthContext)



    const createAccount = e => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.url.value
        const email = e.target.email.value
        const password = e.target.password.value

        const passValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)
        
        if(!passValidate){
            return toast('your password is not validate')
        }

        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: image
                })
                toast("successful create account")
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
                toast(`${error.message}`)
            })
    }

    const loginWithGithub = () => {
        githubLogin()
            .then(() => {
                toast("successful login account")
                navigate('/')
            })
            .catch(error => {
                toast(`${error.message}`)
            })
    }


    return (
        <div className="pb-10">
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className=" xl:w-1/3 md:w-1/2 w-[90%] mx-auto px-4">
                    <div className="text-center ">
                        <h1 className="md:text-5xl text-xl mt-10 md:mt-0 font-bold mb-3">Create Account!</h1>
                    </div>
                    <div className=" w-full shadow-2xl bg-base-100">
                        <form onSubmit={createAccount} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input name="url" required type="text" placeholder="image" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type={see ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                {
                                    see ? <FaEye onClick={() => setSee(!see)} className="absolute right-2 bottom-[15px] text-xl"></FaEye> : <FaEyeSlash onClick={() => setSee(!see)} className="absolute right-2 bottom-[15px] text-xl"></FaEyeSlash>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                            <p>Already have account? <Link to={'/login'}><span className="text-purple-600 font-bold">Login</span></Link></p>
                        </form>
                    </div>
                    <div className="text-center flex items-center gap-3 mt-5 justify-center">
                        <hr className="border border-black w-[30%]" />
                        <h2 className="text-center text-lg font-medium">or sign in</h2>
                        <hr className="border border-black w-[30%]" />
                    </div>
                    <div className="flex items-center justify-center gap-10">
                        <button onClick={loginWithGoogle} className="btn rounded-full mt-5  bg-red-600 text-white "><FaGoogle className="text-lg"></FaGoogle></button>
                        <button onClick={loginWithGithub} className="btn rounded-full mt-5 btn-primary "><FaGithub className="text-lg"></FaGithub></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;