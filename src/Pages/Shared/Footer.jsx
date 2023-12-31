import React from "react";
import logo from "../../assets/site-logo.ico";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex flex-col lg:flex-row justify-between  p-10 lg:p-12 bg-black text-neutral-content">
      <div>
        <img className="w-24 h-24 -ml-5 -mt-2" src={logo} alt="" />
        <Link
          to="/"
          className="cursor-pointer -mt-4 font-extrabold text-xl lg:text-2xl flex flex-col"
        >
          SummerVacation
          <span className="text-sm lg:text-lg text-[#DDDCDC] font-semibold tracking-[0.29em] lg:tracking-[0.23em]">
            Dance School
          </span>
        </Link>
        <small className="w-1/2 lg:w-full text-[#DDDCDC]">
          Copyright © 2023 - All right reserved
        </small>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Login</Link>
        <Link className="link link-hover">Blog</Link>
        <Link className="link link-hover">Classes</Link>
        <Link className="link link-hover">Instructors</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">Home</Link>
        <Link className="link link-hover">Classes</Link>
        <Link className="link link-hover">Services</Link>
        <Link className="link link-hover">Dashboard</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>

      <div>
        <span className="footer-title">Contact Us</span>
        <Link className="link link-hover">Phone: +880 1630 36 0990</Link>
        <Link className="link link-hover">Email: bayazidh570@gmail.com</Link>
        <Link className="link link-hover">
          Address: Brahmanbaria, Bangladesh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
