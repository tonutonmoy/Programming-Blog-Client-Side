import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Registration from "../Component/Registration/Registration";
import Login from "../Component/Login/Login";
import CreateBlog from "../Component/Blog/CreateBlog/CreateBlog";
import MyBlogs from "../Component/Blog/MyBlog/MyBlogs";
import Dashboard from "../Component/Dashboard/Dashboard";
import HomeLayOut from "../Component/Home/HomeLayOut";
import BlogDetails from "../Component/Blog/BlogDetails/BlogDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    children: [
      { path: "/", element: <Home /> },
      { path: "registration", element: <Registration /> },
      { path: "login", element: <Login /> },
      {
        path: "createBlog",
        element: (
          <PrivateRoute>
            <CreateBlog />{" "}
          </PrivateRoute>
        ),
      },
      { path: "blogDetails/:id", element: <BlogDetails /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "myBlogs", element: <MyBlogs /> },
      { path: "updateBlog", element: <Login /> },
    ],
  },
]);

export default router;
