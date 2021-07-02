import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faComments, faTimes, faUsers, faClock, faPaperPlane} from "@fortawesome/free-solid-svg-icons";



export default function ChatContent({contacts, messages}) {
    return(
        <section class="body-chat content ">

            <div class="seccion-usuarios">
                <div class="seccion-buscar">
                    <h4>Usuarios Conectados</h4>
                </div>
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
                        <div class="avatar">
                        name
                    
                        </div>
                        <div class="cuerpo"> 
                            <div class="texto">
                                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Dolor eligendi voluptatum dolore voluptas iure.
                                <span class="tiempo"><FontAwesomeIcon icon={faClock}/>Hace 5 min</span>
                            </div>
                        </div>
                    </div>

                    {/* derecha */}
                    <div class="mensaje left">
                        <div class="cuerpo">
                            <div class="texto">
                                Lorem ipsum dolor sit, amet consectetur adipisicing, elit. Dolor eligendi voluptatum dolore voluptas iure.
                                <span class="tiempo"><FontAwesomeIcon icon={faClock}/>Hace 6 min</span>
                            </div>
                        </div>

                        <div class="avatar">
                        <FontAwesomeIcon icon={faComments}/>
                        </div>
                    </div>
                </div>

                <div class="panel-escritura">
                    <form class="textarea">
                        <textarea placeholder="Escribir mensaje"></textarea>
                        <button type="button" class="enviar"><FontAwesomeIcon icon={faPaperPlane}/></button>
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

