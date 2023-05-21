import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import App from "../App";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/Mytoys";
import Blog from "../Pages/Blog/Blog";
import ToyDetails from "../Pages/Shared/ToyDetails/ToyDetails";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "all-toy",
                element: <AllToys></AllToys>,
                loader: () => fetch('https://fun-car-play-server.vercel.app/cars')
            },
            {
                path: "my-toys",
                element: <MyToys></MyToys>
            },
            {
                path: "add-toys",
                element: <AddToy></AddToy>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path:"blog",
                element: <Blog></Blog>
            },
            {
                path: "details/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://fun-car-play-server.vercel.app/singleCars/${params.id}`)
            }
        ]
    },
]);

export default router;