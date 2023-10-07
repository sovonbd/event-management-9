import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Speakers from "../pages/Speakers/Speakers";
import Conferences from "../pages/Conferences/Conferences";
import Services from "../components/Card/Card";
import CardItemPage from "../pages/CardItemPage/CardItemPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
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
        loader: () => fetch("data.json"),
      },
    ],
  },
]);

export default Routes;
