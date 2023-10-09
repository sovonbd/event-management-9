import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Speakers from "../pages/Speakers/Speakers";
import Conferences from "../pages/Conferences/Conferences";
import CardItemPage from "../pages/CardItemPage/CardItemPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/speakers",
        element: (
          <PrivateRoute>
            <Speakers></Speakers>
          </PrivateRoute>
        ),
        loader: () => fetch("/speakers.json"),
      },
      {
        path: "/conferences",
        element: (
          <PrivateRoute>
            <Conferences></Conferences>
          </PrivateRoute>
        ),
      },
      {
        path: "/conferences/:id",
        element: (
          <PrivateRoute>
            <CardItemPage></CardItemPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Routes;
