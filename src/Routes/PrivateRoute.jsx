import { useContext } from "react";
import { UserContext } from "../Providers/Providers";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Pages/LoadingSpinner/LoadingSpinner";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();
    
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }else if(user){
        return children;
    }else {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
    }
};

export default PrivateRoute;