import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/congig";

const Registration = () => {

    const navigate = useNavigate()

    const [see, setSee] = useState(false)
    const { createUser } = useContext(AuthContext)



    const createAccount = e => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.url.value
        const email = e.target.email.value
        const password = e.target.password.value


        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser,{
                    displayName: name, photoURL: image
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
                <div className="w-1/3 mx-auto">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold mb-3">Create Account!</h1>
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
                                <input name="url" type="text" placeholder="image" className="input input-bordered"  />
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
                </div>
            </div>
        </div>
    );
};

export default Registration;