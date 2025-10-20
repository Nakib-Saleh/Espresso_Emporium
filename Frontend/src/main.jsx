import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./layouts/Root";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./layouts/HomePage";
import AddForm from "./layouts/AddPage/AddForm";
import UpdateForm from "./layouts/UpdatePage/UpdateForm";
import DetailsPage from "./layouts/DetailsPage/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: ()=> fetch("https://espresso-emporium-kp3u.onrender.com/coffee"),
      },
      {
        path:"/coffee",
        element: <AddForm></AddForm>,
      },
      {
        path: "/update/:id",
        element: <UpdateForm></UpdateForm>,
        loader: ({params}) => fetch(`https://espresso-emporium-kp3u.onrender.com/coffee/${params.id}`),
      },
      {
        path: "/coffee/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({params}) => fetch(`https://espresso-emporium-kp3u.onrender.com/coffee/${params.id}`),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
