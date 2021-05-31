import React from 'react'

export default function Form() {
    return (
        <div className="flex-grow photo2 ">
        
            <div>
                
                <h2 className="title">CREAR UNA CUENTA</h2>
                <h4 className="title">Es rápido y fácil</h4>
                <div className="marginInput">
                    <label for="exampleInputName"></label>
                    <input type="text" className="" id="exampleInputName" placeholder="Nombre"></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputLastName"></label>
                    <input type="text" id="exampleInputLastName" placeholder="Apellidos"></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputEmail1"></label>
                    <input type="email" id="exampleInputEmail1" placeholder="Correo electrónico"></input>
                </div>

                <div className="marginInput">
                <label for="examplePassword"></label>
                    <input type="password" id="examplePassword" placeholder="Contraseña"></input>
                </div>
                <div className="marginInput">
                    <label for="exampleInputCity"></label>
                    <input type="text" id="exampleInputCity" placeholder="Lugar de Nacimiento"></input>
                </div>
                <div className="marginInput">
                    <label for="exampleInput"></label>
                    <input type="text" id="exampleInput" placeholder="Provincia"></input>
                </div>

                <label className="title marginInput" for="birthdayInput">Fecha de nacimiento</label>
                <div className="marginInput">
                    <input type="date" id="birthdayInput" name="birthdayInput"  value="2021-04-18" min="1910-01-01" max="2021-05-18"></input>
                </div>
                
                <button className="button3">Registrarte</button>
                    
            </div>
        
        </div>
    )
}
