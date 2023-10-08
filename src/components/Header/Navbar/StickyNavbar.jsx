import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 text-white">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink to="/" className="flex items-center ">
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink to="/conferences" className="flex items-center">
          Conferences
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink to="/speakers" className="flex items-center">
          Speakers
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] lg:px-24 lg:py-10">
      <Navbar className="sticky bg-transparent backdrop-blur-none backdrop-filter-none border-none top-0 z-10 h-max max-w-full rounded-none shadow-none py-2 px-4 md:px-8 md:py-4">
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold text-3xl">
            <Link to="/">Inconference</Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden md:block">{navList}</div>
            <Button
              variant="filled"
              size="sm"
              className="hidden md:inline-block bg-white text-black">
              <span>Login</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse
          className="backdrop-blur-sm backdrop-saturate-200"
          open={openNav}>
          {navList}
          <Button
            variant="filled"
            size="sm"
            fullWidth
            className="mb-2 bg-white text-black">
            <span>Login</span>
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default StickyNavbar;
