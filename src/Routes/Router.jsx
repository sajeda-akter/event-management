import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Services from "../Components/Home/Services/Services";
import ErrorPage from "../ErrorPage/ErrorPage";
import DetailsPage from "../Components/DetailsPage/DetailsPage";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../Components/Gallery/Gallery";
import Blogs from "../Components/Blogs/Blogs";

export const routers = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/gallery",
        element: (
          <PrivateRoute>
            <Gallery />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
      },
      {
        path: "/services/:id",
        loader: () => fetch("services.json"),
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
