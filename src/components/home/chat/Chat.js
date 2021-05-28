import React from 'react'
import Nav from "../Nav"
import ChatContent from "../chat/ChatContent"
import Footer from "../../footer/Footer"
import "../home.css"
import {useState} from "react"


export default function Chat() {

    const messagesText =[
        {name: "Julia", message:"Hola, como estás?", date:"23:58", avatar:""},
        {name: "Albert", message:"Hola, bien y tu?", date:"00:02", avatar:""},
        {name: "Julia", message:"Hola, como estás?", date:"23:58", avatar:""},
        {name: "Albert", message:"Hola, bien y tu?", date:"00:02", avatar:""},
        {name: "Julia", message:"Hola, como estás?", date:"23:58", avatar:""},
        {name: "Albert", message:"Hola, bien y tu?", date:"00:02", avatar:""},
        {name: "Julia", message:"Hola, como estás?", date:"23:58", avatar:""},
        {name: "Albert", message:"Hola, bien y tu?", date:"00:02", avatar:""},
        {name: "Julia", message:"Hola, como estás?", date:"23:58", avatar:""},
        {name: "Albert", message:"Hola, bien y tu?", date:"00:02", avatar:""},
        
      ];

    const users=[
        {name:"Julia"},
        {name: "Albert"}
    ]
      const [messages, setMessages] = useState(messagesText)
      const [contacts, setContacts] = useState(users)

    return (
        <div className="chat-page">
        
            <Nav/>
            <ChatContent messages={messages} setMessages={setMessages} contacts={contacts} setContacts={setContacts}/>
            <Footer/>
        </div>
    )
}
