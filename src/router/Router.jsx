import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Components/Home/Home/Home";
import Register from "../Pages/Registration/Register";
import RegisterLayout from "../Layout/RegisterLayout";
import Signin from "../Pages/Registration/Signin";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
       
      ]
    },

    {
      path: "/registration",
      element: <RegisterLayout></RegisterLayout>,
      children:[
        {
          path:'register',
          element:<Register></Register>
      },
      {
          path:'signin',
          element:<Signin></Signin>
      },
      ]
    },
    
  ]);

export default router