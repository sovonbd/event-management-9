import { Typography } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const navList = (
    <ul className="mb-4 mt-2 flex flex-row md:mb-0 md:items-center md:gap-6 text-white justify-center">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink to="/" className="flex items-center">
          Home <span className="pl-2 md:pl-8">|</span>
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink to="/conferences" className="flex items-center">
          Conferences <span className="pl-2 md:pl-8">|</span>
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink to="/speakers" className="flex items-center">
          Speakers <span className="pl-2 md:pl-8">|</span>
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink to="/contact" className="flex items-center">
          Contact Us
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <div>
      <div className="relative h-80 lg:h-96">
        <img
          style={{
            backgroundImage: "url('https://i.imgur.com/XKL8Glv.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          alt=""
          className="w-full h-80 lg:h-96"
        />
        <div className="pt-10 absolute inset-0 grid h-full w-full place-items-center bg-black/60">
          <div className="w-full text-center lg:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mx-auto mb-12 w-max text-2xl font-medium md:text-3xl lg:text-5xl">
              Inconference
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 font-thin text-sm lg:text-xl opacity-40">
              {navList}
            </Typography>
            <div className="flex justify-center gap-16  ">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer">
                <FaFacebookF className="text-white text-2xl opacity-50 hover:opacity-100"></FaFacebookF>
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer">
                <FaGoogle className="text-white text-2xl opacity-50 hover:opacity-100"></FaGoogle>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer">
                <FaInstagram className="text-white text-2xl opacity-50 hover:opacity-100"></FaInstagram>
              </a>
              <a
                href="https://twitter.com/home"
                target="_blank"
                rel="noreferrer">
                <FaTwitter className="text-white text-2xl opacity-50 hover:opacity-100"></FaTwitter>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer">
                <FaYoutube className="text-white text-2xl opacity-50 hover:opacity-100"></FaYoutube>
              </a>
            </div>
            <div className="text-white opacity-50 py-10">
              <p>All Rights Reserved © 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
