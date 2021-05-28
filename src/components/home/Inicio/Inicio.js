import React from 'react'
import Photo from "../Photo"
import Nav from "../Nav"
import InicioContent from "../Inicio/InicioContent"
import Footer from "../../footer/Footer"


export default function Inicio() {
    return (
        <div className="home">
            <Photo/> 
            <Nav/>
            <InicioContent/>
            <Footer/>
        </div>
    )
}
