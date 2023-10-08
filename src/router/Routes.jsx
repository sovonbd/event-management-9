import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Speakers from "../pages/Speakers/Speakers";
import Conferences from "../pages/Conferences/Conferences";
import CardItemPage from "../pages/CardItemPage/CardItemPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/speakers",
        element: <Speakers></Speakers>,
      },
      {
        path: "/conferences",
        element: <Conferences></Conferences>,
      },
      {
        path: "/conferences/:id",
        element: <CardItemPage></CardItemPage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
]);

export default Routes;
