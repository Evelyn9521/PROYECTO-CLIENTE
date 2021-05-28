import React from 'react'
import "./forgetPassword.css"
import InputPassword from './InputPassword'
import Navbar from "../register/Navbar";
import Footer from "../footer/Footer"



export default function ForgetPassword() {
    return (
        <div className="dflex">
            <Navbar />
            <InputPassword/>
            <Footer /> 
        </div>
    )
}
