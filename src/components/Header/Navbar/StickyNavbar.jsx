import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:gap-2 lg:gap-6 md:mt-0 md:flex-row md:items-center text-white w-max">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline font-medium text-lg"
              : ""
          }>
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/conferences"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline font-medium text-lg"
              : ""
          }>
          Conferences
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/speakers"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline font-medium text-lg"
              : ""
          }>
          Speakers
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline font-medium text-lg"
              : ""
          }>
          About Us
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "underline font-medium text-lg"
              : ""
          }>
          Contact Us
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] lg:px-24 lg:py-10">
      <Navbar className="sticky bg-transparent backdrop-blur-none backdrop-filter-none border-none top-0 z-10 h-max max-w-full rounded-none shadow-none py-2 px-4 md:px-3 lg:px-8 md:py-4">
        <div className="flex items-center justify-between text-white">
          <Typography
            as="a"
            href="#"
            className="pr-4 cursor-pointer py-1.5 font-bold text-3xl">
            <Link to="/">Inconference</Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden md:block">{navList}</div>
            <div className="navbar-end">
              {user ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          !user.photoURL === "null"
                            ? user.photoURL
                            : "https://lh3.googleusercontent.com/a/ACg8ocJvDHisVPydZIb8y6TGCfYfOlh0x8Vy5eB72O6EOOgy8YI=s96-c"
                        }
                        alt={user.displayName}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black divide-y-2">
                    <li>
                      <button className="btn btn-sm normal-case btn-ghost">
                        {user.displayName ? user.displayName : user.email}
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn btn-sm  btn-ghost"
                        onClick={logOut}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink to="/login">
                  <Button
                    variant="filled"
                    size="sm"
                    className="hidden md:inline-block bg-white text-black">
                    <span>Login</span>
                  </Button>
                </NavLink>
              )}
            </div>

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
          {user?.email ? (
            ""
          ) : (
            <Button
              variant="filled"
              size="sm"
              fullWidth
              className="mb-2 bg-white text-black">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default StickyNavbar;

// className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "underline font-medium text-lg" : "f")}
