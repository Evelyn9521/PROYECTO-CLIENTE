import React from 'react'
import Form from "./Form"
import Navbar from "./Navbar";
import Footer from "../footer/Footer";
import "./register.css"

export default function Register() {
    return (
        <div className="d-flex photobackground">
            <Navbar/>
            <Form/>
            <Footer /> 
        </div>
    )
}
