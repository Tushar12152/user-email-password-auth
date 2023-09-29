import { createBrowserRouter } from "react-router-dom";
import Route from "../route/Route";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/register/Register";
import HeroRegister from "../component/HeroRegister/HeroRegister";
import LoggedIn from "../component/Login/LoggedIn/LoggedIn";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Route></Route>,
        children:[
            {
                path:'/',
                element:<Home></Home>,

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/heroRegister',
                element:<HeroRegister></HeroRegister>
            },
            {
                path:'/loggedin',
                element:<LoggedIn></LoggedIn>
            }

        ]

    }
])

export default Router;