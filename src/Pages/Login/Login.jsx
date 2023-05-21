import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/Providers";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";



const Login = () => {
    useTitle("login");
    const { loginUser, handleGoogleSignIn } = useContext(UserContext);
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        setError("");
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(() => {
                form.reset();
                navigate(from, { replace: true });
                Swal.fire({
                    icon: 'success',
                    title: 'Login successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <div className="md:w-1/2 my-10 mx-auto bg-gray-100 p-10 rounded-lg">
            <h2 className="text-3xl font-semibold text-center">Login Your Account</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control relative mb-3">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={show ? 'text' : 'password'} name="password" placeholder="Password" className="input input-bordered" required />

                    {show ? <FaEye onClick={() => setShow(!show)} className="absolute bottom-4 right-4 cursor-pointer"></FaEye>
                        : <FaEyeSlash onClick={() => setShow(!show)} className="absolute bottom-4 right-4 cursor-pointer"></FaEyeSlash>}

                </div>
                <p className="text-red-500">{error}</p>

                <p>if you new member? please <Link to="/register" className="bg-lime-400 text-sm px-1 rounded-full font-semibold">Register</Link> </p>
                <button type="submit" className="btn btn-block btn-primary my-5">Login</button>
            </form>
            <div className="divider">OR</div>
            <button onClick={()=>handleGoogleSignIn(from, navigate)} 
            className="btn btn-block btn-outline btn-primary">
            <FaGoogle></FaGoogle> Login With Google</button>
        </div>
    );
};

export default Login;