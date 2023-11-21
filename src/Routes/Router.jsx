import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Services from "../Components/Home/Services/Services";

export const routers=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            }
            ,{
                path:'/signup',
                element:<Register/>
            },
            {
                path:'/services',
                element:<Services/>
            }
        ]
    }
])