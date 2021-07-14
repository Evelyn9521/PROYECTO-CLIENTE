import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPaperPlane, faUser} from "@fortawesome/free-solid-svg-icons";
import {useAuthContext} from "../../../context/AuthContext";
import { useState, useEffect, useRef } from "react";
import socket from "./socketio";


export default function ChatContent() {

    const {loginUser} = useAuthContext();
    const userConected = loginUser.name

    const [conectedUsers, setConectedUsers] = useState([])
    const [mensaje, setMensaje] = useState(""); //cada mensaje que escribe el usuario
    const [mensajes, setMensajes] = useState([]); //Array con todos los mensajes del chat
    const [newUserConected, setNewUserConected] =useState(false);
     
        useEffect(() => {
            const conectedUsers= JSON.parse( localStorage.getItem("conectedUsers")==null?"[]":localStorage.getItem("conectedUsers"))
            if(conectedUsers.indexOf(userConected) === -1){
                conectedUsers.push(userConected)
                setNewUserConected(true)
            }
            setConectedUsers(conectedUsers)
            localStorage.setItem("conectedUsers",JSON.stringify(conectedUsers))


          socket.emit("conectado", userConected); //cuando se conecte un usuario que aparezca su nombre
        }, [userConected, newUserConected]);
      
        useEffect(() => {
          socket.on("mensajes", (mensaje) => { //queremos capturar el mensaje y enviarlo al servidor
            setMensajes([...mensajes, mensaje]);
          });
      
          return () => {
            socket.off(); //para que no entre en bucle y colapse la app
          };
        }, [mensajes]); 
      
        const divRef = useRef(null);
        useEffect(() => {
          divRef.current.scrollIntoView({ behavior: "smooth" }); //hace que aparezca el ultimo mensaje del chat, sin tener que hacer scroll hacia abajo
        });
      
        const submit = (e) => {
          e.preventDefault();
          socket.emit("mensaje", userConected, mensaje); //enviamos la informacion al servidor con el mensaje
          setMensaje("");
        };

    return(
        <div className="body-chat content ">

            <div className="seccion-usuarios">
                    <h4>Usuarios en la Sala </h4>
                <div className="seccion-lista-usuarios">
                    {conectedUsers.map(userConected=>( <div className="cuerpo">
                        <span> <FontAwesomeIcon icon={faUser}/>&nbsp;{userConected}</span>
                    </div>))}
                   
                </div>
            </div>
            
            <div className="seccion-chat">
                <div className="usuario-seleccionado">
                    <div className="cuerpo seccion-titulo">
                        <h3>chat</h3>
                    </div>
                </div>

                <div className="panel-chat">
                    <div className="mensaje">
                        {mensajes.map((e, i)=> (
                            <div className="cuerpo" align={e.nombre===userConected? "right":"left"}> 
                             <div  className="avatar">{e.nombre}</div>
                                <div key={i} className="texto">{e.mensaje}</div>
                            </div>
                        ))}
                        <div ref={divRef}></div>
                    </div>
                </div>

                <div className="panel-escritura">
                    <form onSubmit={submit} className="textarea">
                        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Escribir mensaje"></textarea>
                        <button  type="submit" className="enviar"><FontAwesomeIcon icon={faPaperPlane}/></button>
                    </form>
                </div>
            </div>
        </div>
    )



}

