import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyApplications/MyApplications";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";

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
           path:'jobs/:id',
           element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
           loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'jobApply/:id',
          element:<JobApply></JobApply>
        },
        {
          path:'myApplications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
          path:'viewApplications/:job_id',
          element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
        },
        {
          path:'addJob',
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path:'myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:"login",
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;