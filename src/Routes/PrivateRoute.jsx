import { useContext } from "react";
import { UserContext } from "../Providers/Providers";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();
    
    if(loading){
        return <h2>loading</h2>
    }else if(user){
        return children;
    }else {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
    }
};

export default PrivateRoute;