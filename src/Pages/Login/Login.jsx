import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useState } from "react";



const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="md:w-1/2 my-10 mx-auto bg-gray-100 p-10 rounded-lg">
            <h2 className="text-3xl font-semibold text-center">Login Now</h2>
            <form className="">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required/>
                </div>
                <div className="form-control relative mb-3">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={show?'text':'password'} name="password" placeholder="Password" className="input input-bordered" required/>

                    {show?<FaEye onClick={() => setShow(!show)} className="absolute bottom-4 right-4 cursor-pointer"></FaEye>
                    :<FaEyeSlash onClick={() => setShow(!show)} className="absolute bottom-4 right-4 cursor-pointer"></FaEyeSlash>}

                </div>
                <p>if you new member? please <Link to="/register" className="bg-lime-400 text-sm px-1 rounded-full font-semibold">Register</Link> </p>
                <button className="btn btn-block btn-primary my-5">Login</button>
            </form>
            <div className="divider">OR</div>
            <button className="btn btn-block btn-outline btn-primary">
            <FaGoogle></FaGoogle> Login With Google</button>
        </div>
    );
};

export default Login;