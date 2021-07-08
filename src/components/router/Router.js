import React from 'react'
import Login from "../login/Login";
import Register from "../register/Register"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ForgetPassword from '../forgetPassword/ForgetPassword';
import Inicio from "../home/Inicio/Inicio"
import CuideSuSalud from "../home/cuideSuSalud/CuideSuSalud"
import EnlacesInteres from "../home/enlacesInteres/EnlacesInteres";
import Chat from "../home/chat/Chat"
import Editar from '../home/editarUsuario/Editar';
import PrivateRoute from "../../privateRoute/PrivateRoute";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={Login}/>
                <PrivateRoute path="/register" component={Register}/>
                <PrivateRoute path="/forgetpassword" component={ForgetPassword}/>
                <PrivateRoute path="/inicio"> <Inicio/></PrivateRoute>
                <PrivateRoute path="/cuidesusalud"><CuideSuSalud/></PrivateRoute>
                <PrivateRoute path= "/enlacesinteres"><EnlacesInteres/> </PrivateRoute>
                <PrivateRoute path="/chat"><Chat/></PrivateRoute>
                <PrivateRoute path="/editar"><Editar/></PrivateRoute>
               
            </Switch>
        </BrowserRouter>
        
    )
}
