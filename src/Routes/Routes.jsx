import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import App from "../App";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";

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
                path: "add-toys",
                element: <AddToy></AddToy>
            }
        ]
    },
]);

export default router;