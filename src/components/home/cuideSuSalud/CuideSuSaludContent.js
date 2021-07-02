import React from 'react'
import {useEffect, useState} from "react";

export default function CuideSuSaludContent() {

    const [food, setFood] = useState([])

    useEffect(() => {

        const API_URL="http://localhost:3004/api2/recipes"
        fetch(API_URL)
          .then(response => response.json())
          .then(data => setFood(data.recipes));
      }, []);

    return (
        <div className="divPadre content">
            <h2>Alimentos para prevenir el cancer</h2>
            <p>Una alimentación basada en la dieta mediterránea podría llegar a reducir un 30% el riesgo de padecer cáncer de mama. Los pilares de esta dieta son verduras, frutas, legumbres, pescado y aceite de oliva y, según el estudio, todos ellos se asocian con un menor riesgo de sufrir esta dolencia de la que, sólo en España, se detectan 26.000 casos cada año.</p>
            <p>Estos son algunos de los alimentos ricos en antioxidantes, vitaminas, fibras naturales y minerales cuyo consumo habitual puede contribuir a una prevención eficaz del desarrollo del cáncer:</p>
       
        <div className="card-container">
            {
                food.map((recipes)=>{
                return (
                <div className="card">
                    <img className="imgRecipes" src={"http://localhost:3004/" + recipes.image} /> 
                    <div className="card-body">
                        <h4 className="card-title">{recipes.name}</h4>
                        <p >{recipes.description}</p>
                        
                    </div>
                </div>
                )
                })
            
            }
        </div>
        </div>
    )
}
