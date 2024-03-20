import { Outlet,Navigate } from "react-router-dom";
import react from "react";

const ProtectedRoutes = () => {
const auth=localStorage.getItem("token");
return auth ? <Outlet/> : <Navigate to="/login"/>
};
export default ProtectedRoutes;
