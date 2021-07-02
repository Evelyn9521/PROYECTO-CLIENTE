import React from 'react'
import EditarContent from "../editarUsuario/EditarContent";
import Footer from "../../footer/Footer";
// import "../../register.css"

export default function Editar() {
    return (
        <div className="d-flex photobackground">
            <EditarContent/>
            <Footer /> 
        </div>
    )
}
