import { Outlet } from "react-router-dom";
import StickyNavbar from "../components/Header/Navbar/StickyNavbar";

const Root = () => {
  return (
    <div>
      {/* <StickyNavbar></StickyNavbar> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
