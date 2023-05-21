import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../Providers/Providers";

const Navbar = () => {
    const {user, logOut} = useContext(UserContext);

    const navBarItems = <>
        <NavLink to='/'
            className={({ isActive }) => isActive ? "text-red-400 me-5" : "me-5"}>Home
        </NavLink>
        <NavLink to='/all-toy'
            className={({ isActive }) => isActive ? "text-red-400 me-5" : "me-5"}>All Toys</NavLink>
        <NavLink to='/my-toys'
            className={({ isActive }) => isActive ? "text-red-400 me-5" : "me-5"}>My Toys</NavLink>
        <NavLink to='/add-toys'
            className={({ isActive }) => isActive ? "text-red-400 me-5" : "me-5"}>Add A Toy</NavLink>
        <NavLink to='/all-toys'
            className={({ isActive }) => isActive ? "text-red-400 me-5" : "me-5"}>Blogs</NavLink>
        <NavLink to='/register'
            className={({ isActive }) => isActive ? "text-red-400 me-5" : "me-5"}>Register</NavLink>

    </>
    console.log(user)
    return (
        <div className="navbar bg-base-100 sticky top-0 z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBarItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Fun Car Play</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBarItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user?<>
                <div className="w-10 h-10 rounded-full overflow-hidden me-3 bg-slate-400">
                    <img src={user.photoURL} />
                </div>
                <Link onClick={logOut} to="/" className="btn">Logout</Link>
                </>
                :<Link to="/login" className="btn">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;