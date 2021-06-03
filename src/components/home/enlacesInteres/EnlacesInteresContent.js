import React from 'react'
import m5 from "../../../image/m5.png"

export default function EnlacesInteresContent() {
    return (
        <div className="content">
            <div className="title3">
                <h4>Aquí podrás encontrar lencería y ropa de baño para prótesis mamarias, aparte de otros productos relacionados con el cáncer de mama</h4>
                <h5>Algunas de las webs más recomendadas son:</h5>
            </div>
            
            <div className="threeColumnsButtom">
           
                <div className="columnButtomLeft">
                    <div><a className="letterLink" target="_blank" href="https://www.oysho.com/es/lencer%C3%ADa/sujetadores/sujetadores-post-operatorio-c1010352013.html"><button className="button5">Oysho</button></a></div>
                    <div><a className="letterLink" target="_blank" href="https://pilarmartinezpostmastectomia.es/"><button className="button5">Pilar Martínez, Boutique</button></a></div>
                    <div><a className="letterLink" target="_blank" href="https://www.amoena.com/es/"><button className="button5">Amoena</button></a></div>
                </div>
                <div>
                    <img className="logo2" src={m5}></img>
                </div>
                <div className="columnButtomRight">
                <div><a className="letterLink" target="_blank" href="https://www.boutique-cancer-de-mama.es/"><button className="button5">Boutique, Cáncer de mama</button></a></div>
                <div><a className="letterLink" target="_blank" href="https://womensecret.com/es/es/colecciones/post-surgery"><button className="button5">Women Secret</button></a></div>
                <div><a className="letterLink" target="_blank" href="https://www.divinaoncobeauty.com/44-banadores-mastectomia"><button className="button5">Divina Onco Beauty</button></a></div>
               
                </div>

               
            </div>
        </div>
    )
}
