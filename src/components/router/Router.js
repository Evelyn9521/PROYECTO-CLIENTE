import React from 'react'
import Login from "../login/Login";
import Register from "../register/Register"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ForgetPassword from '../forgetPassword/ForgetPassword';
import Inicio from "../home/Inicio/Inicio"
import CuideSuSalud from "../home/cuideSuSalud/CuideSuSalud"
import Chat from "../home/chat/Chat"

export default function router() {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/forgetpassword" component={ForgetPassword}/>
                <Route path="/inicio" component={Inicio}/>
                <Route path="/cuidesusalud" component={CuideSuSalud}/>
                <Route path="/chat" component={Chat}/>
                
            </Switch>
        </BrowserRouter>
        </>
    )
}
