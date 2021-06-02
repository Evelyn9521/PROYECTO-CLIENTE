import React from 'react'
import Photo from "../Photo"
import Nav from "../Nav"
import EnlacesInteresContent from "../enlacesInteres/EnlacesInteresContent";
import Footer from "../../footer/Footer"

export default function EnlacesInteres() {
    return (
        <div className="home">
            <Photo/>
            <Nav/>
            <EnlacesInteresContent/>
            <Footer/>

        </div>
    )
}
