import React from 'react'
import Photo from "../Photo"
import Nav from "../Nav"
import CuideSuSaludContent from "./CuideSuSaludContent"
import Footer from "../../footer/Footer"


export default function CuideSuSalud() {

    return (
        <div className="home">
            <Photo/> 
            <Nav/>
            <CuideSuSaludContent/>
            <Footer/>
        </div>
    )
}
