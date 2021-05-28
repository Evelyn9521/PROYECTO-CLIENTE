import React from 'react'
import food from "../../../image/food.jpg";

export default function CuideSuSaludContent({food}) {
    return (
        <div className="divPadre content">
            <h2>Alimentos para prevenir el cancer</h2>
            <p>Una alimentación basada en la dieta mediterránea podría llegar a reducir un 30% el riesgo de padecer cáncer de mama. Los pilares de esta dieta son verduras, frutas, legumbres, pescado y aceite de oliva y, según el estudio, todos ellos se asocian con un menor riesgo de sufrir esta dolencia de la que, sólo en España, se detectan 26.000 casos cada año.</p>
            <p>Estos son algunos de los alimentos ricos en antioxidantes, vitaminas, fibras naturales y minerales cuyo consumo habitual puede contribuir a una prevención eficaz del desarrollo del cáncer:</p>
       
        <div className="card-container">
            {
                food.map((aliment)=>{
                return (
                <div className="card">
                    <img className="card-img-top imagee" src={food}></img>
                    <div className="card-body">
                        <h4 className="card-title">{aliment.name}</h4>
                        <p className="card-text">{aliment.description}</p>
                    </div>
                </div>
                )
                })
            
            }
        </div>
        </div>
    )
}
