import { Outlet, useLocation } from "react-router-dom";
import StickyNavbar from "../components/Header/Navbar/StickyNavbar";
import Footer from "../components/Footer/Footer";

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
      <div className={location.pathname === "/" ? "relative top-[300px] lg:top-[600px]" : ""}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
