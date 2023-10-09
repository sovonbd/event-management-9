import { Outlet, useLocation } from "react-router-dom";
import StickyNavbar from "../components/Header/Navbar/StickyNavbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? (
        ""
      ) : (
        <div className="bg-black">
          <StickyNavbar></StickyNavbar>
        </div>
      )}
      <Outlet></Outlet>
      <div
        className={
          location.pathname === "/" ? "relative top-[300px] lg:top-[600px]" : ""
        }>
        <Footer></Footer>
      </div>
      <ToastContainer style={{ width: "max-content" }}></ToastContainer>
    </div>
  );
};

export default Root;
