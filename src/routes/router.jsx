import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Page Not Found</h2>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
           path:'/jobs/:id',
           element:<JobDetails></JobDetails>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;