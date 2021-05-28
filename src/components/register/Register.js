import React from 'react'
import Form from "./Form"
import Navbar from "./Navbar";
import Footer from "../footer/Footer";
import "./register.css"

export default function Register() {
    return (
        <div className="d-flex">
            <Navbar/>
            <Form/>
            <Footer /> 
        </div>
    )
}
