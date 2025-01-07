import { useAuthContext } from "../../../context/auth/hooks/useAuthContext";
import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AUTH_PATHS } from "../../../routes/auth/index.enum";

const AuthGuardForLogOut: React.FC<PropsWithChildren> = ({children}) =>{
    const { user } = useAuthContext();

    if(!user){
        return <Navigate to={AUTH_PATHS.SIGNIN}/>
    }

    return children || <Outlet/>;
}

export default AuthGuardForLogOut;