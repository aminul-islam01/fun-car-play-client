import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState();
    const [show, setShow] = useState(false);

    const handleRegister = (event) => {
        setError('');
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password.length < 8) {
            setError("Password length must be at least 8 characters");
            return;
        } else if (password.length >= 15) {
            setError("Password length must not exceed 15 characters");
            return;
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setError("Password must be at least one uppercase");
            return;
        } else if (!/(?=.*[@$!%#*?&])/.test(password)) {
            setError("Password must be at least one special characters");
            return;
        } else if (!/[0-9]/.test(password)) {
            setError("Password must be at least one number");
            return;
        } else if (password !== confirmPassword) {
            setError("Confirm your password");
            return;
        }
    }

    return (
        <div className="md:w-1/2 my-10 mx-auto bg-gray-100 p-10 rounded-lg">
            <h2 className="text-3xl font-semibold text-center">Register Now</h2>
            <form onSubmit={handleRegister}>
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name="image" placeholder="Image Url" className="input input-bordered" required/>
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={show?'text':'password'} name="password" placeholder="Password" className="input input-bordered" required/>

                    {show?<FaEye onClick={() => setShow(!show)} className="absolute bottom-4 right-4 cursor-pointer"></FaEye>
                    :<FaEyeSlash onClick={() => setShow(!show)} className="absolute bottom-4 right-4 cursor-pointer"></FaEyeSlash>}

                </div>
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type={show?'text':'password'} name="confirmPassword" placeholder="Confirm Password" className="input input-bordered" required/>
                </div>

                <p>if you have an account? please <Link to="/login" className="bg-lime-400 text-sm px-1 rounded-full font-semibold">Login</Link> </p>

                <p className='text-red-500 mt-3'>{error}</p>
                <button type="submit" className="btn btn-block btn-primary my-5">Register</button>
            </form>
        </div>
    );
};

export default Register;