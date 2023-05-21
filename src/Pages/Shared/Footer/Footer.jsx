import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-base-200  p-10">
            <Link to="/" className="text-xl font-semibold"><span className="text-blue-700 font-bold font-serif">FunCar</span> Play</Link>
            <footer className="footer text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <a className="link link-hover">Dhaka Uttara Bangladesh</a>
                    <a className="link link-hover">Dhaka Mirpur-1 Bangladesh</a>
                </div>
                <div>
                    <span className="footer-title">Contact us</span>
                    <a className="">sunday to thursday 9am to 8pm</a>
                    <a className="link link-hover">+88 0123456789</a>
                    <div className="flex gap-3">
                        <FaFacebook className="text-2xl cursor-pointer text-blue-700"></FaFacebook>
                        <FaTwitter className="text-2xl cursor-pointer text-blue-700"></FaTwitter>
                        <FaInstagram className="text-2xl cursor-pointer text-blue-700"></FaInstagram>
                    </div> 
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;