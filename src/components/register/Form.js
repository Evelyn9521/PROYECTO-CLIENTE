import React from 'react'
import { useForm } from "../../hooks/UseForm";
import { REGISTER } from "../../config/config";
import swal from "sweetalert";


export default function Form() {
    const formInitialState = { name: '', lastname: '', email:'', password:"" };; 
    const [form, handleChange] = useForm(formInitialState);
  

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
          
            swal(
                'Usuario Registrado Correctamente!',
                'ya puede iniciar sesión!',
                'success'
              )
        }else{
            swal(
                'La contraseña debe tener más de 8 carácteres',
                'vuelve a intentarlo',
                'warning'
            )
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
