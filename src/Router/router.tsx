import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Registration from "../Component/Registration/Registration";
import Login from "../Component/Login/Login";
import CreateBlog from "../Component/Blog/CreateBlog/CreateBlog";

import Dashboard from "../Component/Dashboard/Dashboard";
import HomeLayOut from "../Component/Home/HomeLayOut";
import BlogDetails from "../Component/Blog/BlogDetails/BlogDetails";
import PrivateRoute from "./PrivateRoute";
import MyBlogs from "../Component/Dashboard/User/MyBlogs/MyBlogs";
import UpdateBlogs from "../Component/Dashboard/User/UpdateBlogs/UpdateBlogs";
import ManageUsers from "../Component/Dashboard/Admin/ManageUsers/ManageUsers";
import PublishedBlogs from "../Component/Dashboard/Admin/PublishedBlogs/PublishedBlogs";
import RequestedBlogs from "../Component/Dashboard/Admin/RequestedBlogs/RequestedBlogs";
import Profile from "../Component/Dashboard/Profile/Profile";

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
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "myBlogs",
        element: (
          <PrivateRoute>
            <MyBlogs />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "updateBlog/:postId",
        element: (
          <PrivateRoute>
            <UpdateBlogs />
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "publishedBlogs",
        element: (
          <PrivateRoute>
            <PublishedBlogs />
          </PrivateRoute>
        ),
      },
      {
        path: "RequestedBlogs",
        element: (
          <PrivateRoute>
            <RequestedBlogs />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
