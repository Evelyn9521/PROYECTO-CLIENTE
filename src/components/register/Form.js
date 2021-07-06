import React from 'react'
import { useForm } from "../../hooks/UseForm";
import { REGISTER } from "../../config/config";
import swal from "sweetalert";
// import {useHistory} from "react-router-dom";

export default function Form() {
    const formInitialState = { name: '', lastname: '', email:'', password:"" };; 
    const [form, handleChange] = useForm(formInitialState);
    // const history = useHistory();

    // function handleClick() {
    //     history.push(`/`)
    // }

    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }

        const response = await fetch(REGISTER, options);
        const data = await response.json();
        console.log(data);

        if(response.status >=200 && response.status < 300){
          
            swal("Usuario registrado correctamente, ya puede Iniciar Sesión")
        }
    }


    return (
        <form onSubmit={handleSubmit} className="flex-grow photo2 ">
        
            <div>
                <h2 className="title">CREAR UNA CUENTA</h2>
                <h4 className="title">Es rápido y fácil</h4>
                <div className="marginInput">
                    <label for="exampleInputName"></label>
                    <input onChange={handleChange} type="text" name="name" value ={form.name} className="" id="exampleInputName" placeholder="Nombre"></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputLastName"></label>
                    <input onChange={handleChange} type="text" name="lastname" value ={form.lastname} id="exampleInputLastName" placeholder="Apellidos"></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputEmail1"></label>
                    <input onChange={handleChange} type="email" name="email" value ={form.email} id="exampleInputEmail1" placeholder="Correo electrónico"></input>
                </div>

                <div className="marginInput">
                <label for="examplePassword"></label>
                    <input onChange={handleChange} type="password" name="password" value ={form.password} id="examplePassword" placeholder="Contraseña"></input>
                </div>
             
                <button  type="submit" className="button3">Registrarte</button>
                    
            </div>
        
        </form>
    )
}
