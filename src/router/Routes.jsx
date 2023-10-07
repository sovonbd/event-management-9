import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Speakers from "../pages/Speakers/Speakers";
import Conferences from "../pages/Conferences/Conferences";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/speakers",
        element: <Speakers></Speakers>,
      },
      {
        path: "/conferences",
        element: <Conferences></Conferences>,
      },
    ],
  },
]);

export default Routes;
