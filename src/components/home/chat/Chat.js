import React from 'react'
import Nav from "../Nav"
import ChatContent from "../chat/ChatContent"
import Footer from "../../footer/Footer"
import "../home.css"


export default function Chat() {

  
    return (
        <div className="home photoChat" >
        
            <Nav/>
            <ChatContent/>
            <Footer/>
        </div>
    )
}
