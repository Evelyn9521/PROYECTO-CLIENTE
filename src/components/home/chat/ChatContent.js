import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPaperPlane, faUser} from "@fortawesome/free-solid-svg-icons";
import {useAuthContext} from "../../../context/AuthContext";
import { useState, useEffect, useRef } from "react";
import socket from "./socketio";


export default function ChatContent() {

    const {loginUser} = useAuthContext();
    const userConected = loginUser.name

    const [mensaje, setMensaje] = useState(""); //cada mensaje que escribe el usuario
    const [mensajes, setMensajes] = useState([]); //Array con todos los mensajes del chat

     
        useEffect(() => {
          socket.emit("conectado", userConected); //cuando se conecte un usuario que aparezca su nombre
        }, [userConected]);
      
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
        <section class="body-chat content ">

            <div class="seccion-usuarios">
                    <h4>Usuarios en la Sala </h4>
                <div class="seccion-lista-usuarios">
                    <div class="cuerpo">
                        <span> <FontAwesomeIcon icon={faUser}/>{userConected}</span>
                    </div>
                </div>
            </div>
            
            <div class="seccion-chat">
                <div class="usuario-seleccionado">
                    <div class="cuerpo seccion-titulo">
                        <h3>chat</h3>
                    </div>
                </div>

                <div class="panel-chat">
                    <div class="mensaje">
                        {mensajes.map((e, i)=> (
                           
                            <div class="cuerpo"> 
                             <div  class="avatar">{e.userConected}</div>
                                <div key={i} class="texto">{e.mensaje}
                                    {/* <span class="tiempo"><FontAwesomeIcon icon={faClock}/>Hace 5 min</span> */}
                                </div>
                            </div>
                        ))}
                        <div ref={divRef}></div>
                    </div>
                </div>
                     {/* derecha */}
                    {/* <div class="mensaje left">
                        <div class="cuerpo">
                            <div class="texto">
                                Lorem ipsum dolor sit, . e voluptas iure.
                                <span class="tiempo"><FontAwesomeIcon icon={faClock}/>Hace 6 min</span>
                            </div>
                        </div>

                        <div class="avatar">
                        <FontAwesomeIcon icon={faComments}/>
                        </div>
                    </div> */}

                <div class="panel-escritura">
                    <form onSubmit={submit} class="textarea">
                        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Escribir mensaje"></textarea>
                        <button  type="button" class="enviar"><FontAwesomeIcon icon={faPaperPlane}/></button>
                    </form>
                </div>
            </div>
        </section>
    )



}

