import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import App from "../App";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import MyToys from "../Pages/MyToys/Mytoys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "all-toy",
                element: <AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/cars')
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
            }
        ]
    },
]);

export default router;