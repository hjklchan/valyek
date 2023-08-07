import { Navigate } from "react-router-dom";

export default function({ children }: { children: React.ReactNode }): React.ReactNode {
    // TODO Check auth status
    const authenticated = true;
    return authenticated ? children : <Navigate to={"/login"} replace />
}

