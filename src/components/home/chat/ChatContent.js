import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {useAuthContext} from "../../../context/AuthContext";
import { useState, useEffect, useRef } from "react";
import socket from "./socketio";


export default function ChatContent() {
        const {loginUser} = useAuthContext();
        const [mensaje, setMensaje] = useState("");
        const [mensajes, setMensajes] = useState([]);
      let nombre;
        useEffect(() => {
          socket.emit("conectado", nombre);
        }, [nombre]);
      
        useEffect(() => {
          socket.on("mensajes", (mensaje) => {
            setMensajes([...mensajes, mensaje]);
          });
      
          return () => {
            socket.off();
          };
        }, [mensajes]); 
      
        const divRef = useRef(null);
        useEffect(() => {
          divRef.current.scrollIntoView({ behavior: "smooth" });
        });
      
        const submit = (e) => {
          e.preventDefault();
          socket.emit("mensaje", nombre, mensaje);
          setMensaje("");
        };
    return(
        <section class="body-chat content ">

            <div class="seccion-usuarios">
                    <h4>Usuarios Conectados</h4>
                <div class="seccion-lista-usuarios">
                        <div class="cuerpo">
                            <span> Nombre</span>
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
                             <div class="avatar">{loginUser.nombre}</div>
                                <div class="texto">{loginUser.mensaje}
                                    {/* <span class="tiempo"><FontAwesomeIcon icon={faClock}/>Hace 5 min</span> */}
                                </div>
                            </div>
                        ))}
                        
                        <div ref={divRef}></div>
                    </div>

                    {/* derecha */}
                    {/* <div class="mensaje left">
                        <div class="cuerpo">
                            <div class="texto">
                                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Dolor eligendi voluptatum dolore voluptas iure.
                                <span class="tiempo"><FontAwesomeIcon icon={faClock}/>Hace 6 min</span>
                            </div>
                        </div>

                        <div class="avatar">
                        <FontAwesomeIcon icon={faComments}/>
                        </div>
                    </div> */}
                </div>

                <div class="panel-escritura">
                    <form onSubmit={submit} class="textarea">
                        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Escribir mensaje"></textarea>
                        <button  type="button" class="enviar"><FontAwesomeIcon icon={faPaperPlane}/></button>
                    </form>
                </div>
            </div>
        </section>
    )

    // return (
        
    //     <div className=" content  divTwoColumns">
    //         <div className="contactsleft">
    //             <h2>Contactos</h2>
    //             <ul >
    //                 {contacts.map((contact)=> <li>{contact.name}</li>)}
    //             </ul>
    //         </div>
                
    //         <div className="chatRigth ">

    //             <div className="card-header">
    //                 <h4 className="card-title"><strong>Chat</strong></h4> 
    //             </div>
                            
    //             <div className="cardfixed" >
    //                 { 
    //                     messages.map((message)=>{
    //                     return(
    //                         <div className="media media-chat chat-reverse">
    //                             <div className="media-body">
    //                                 <p>{message.name}</p>
    //                                 <p>{message.message}</p>
    //                                 <p className="meta"><time>{message.date}</time></p>
    //                             </div>
                             
    //                         </div>
    //                         )
    //                     })
    //                 }
    //             </div>
                

    //             <div> 
    //                 <input className="" type="text" placeholder="Escribir un mensaje"/> 
    //                 <button>Enviar</button>
        
    //             </div>
    
    //         </div>
    //         </div>
            
        
    // )
}

