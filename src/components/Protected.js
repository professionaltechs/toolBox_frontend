import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
    if (localStorage.getItem('isLoggedIn') === "true") {
        return children;
    }
    return <Navigate to="/" replace/>;
};
