import { Redirect, Route } from "react-router";
import { useAuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children, ...rest }) {


    //el usuario no puede acceder a una ruta sin estar logeado o registrado
    const { isAuthenticated } = useAuthContext();

    return (
        <Route {...rest} render={() => {
            return isAuthenticated
                ? children //en este caso es la ruta de mi página inicio
                : <Redirect exact to="/"/>
        }} />
    )
}