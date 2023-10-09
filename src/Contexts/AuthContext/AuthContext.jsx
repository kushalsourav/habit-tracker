import { createContext, useContext, useEffect, useReducer } from "react";
import AuthReducer from "../../Reducers/AuthReducer/AuthReducer";
import { redirect, useNavigate , Navigate, useLocation} from "react-router-dom";

const initialAuthState = {
    username: "",
    email: "",
    password: "",
    login: false
}


const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState)
    const location = useLocation()
    const navigate = useNavigate()

    console.log(initialAuthState)

      return(
        <AuthContext.Provider value={{authState, authDispatch}} >
            {children}
        </AuthContext.Provider>
      )
}

export {AuthProvider, useAuth}