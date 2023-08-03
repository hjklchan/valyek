import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    // TODO Check auth status
    const authenticated = true;
    return authenticated ? children : <Navigate to={"/login"} replace />
}

export default RequireAuth;
