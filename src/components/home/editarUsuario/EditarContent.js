import {useAuthContext} from "../../../context/AuthContext";
import {EDIT_USER} from "../../../config/config";
import {DELETE_USER} from "../../../config/config";
import { useForm } from "../../../hooks/UseForm";
import swal from "sweetalert";
import {useHistory} from "react-router-dom";


export default function EditarContent() {
   
    const {loginUser, signOut} = useAuthContext();
    const [form, handleChange] = useForm({name: loginUser.name, lastname: loginUser.lastname, email:loginUser.email, password:loginUser.password});
    
    const history = useHistory();
    
    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }

        const response = await fetch(EDIT_USER + loginUser._id, options);
        const data = await response.json();
        console.log(data);

        if(response.status >=200 && response.status < 300){
            swal(
                'Usuario actualizado correctamente!',
                '',
                'success'
              )
        }
    }
    

    const handleDelete = async () => {
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }

        const response = await fetch(DELETE_USER + loginUser._id, options);
        const data = await response.json();
        console.log(data)
 
        if(response.data === 204 ){
            signOut();
            history.push("/")
          
        }
         
    }

 
          
    return (
        <>
        <form onSubmit={handleSubmit} className="flex-grow photo2 ">
            <div>
                <h2 className="title">EDITA TU CUENTA </h2>
                <div className="marginInput">
                    <label for="exampleInputName"></label>
                    <input onChange={handleChange} type="text" id="exampleInputName" placeholder="Nombre" name="name" value={form.name}></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputLastName"></label>
                    <input onChange={handleChange} type="text" id="exampleInputLastName" placeholder="Apellidos" name="lastname" value={form.lastname}></input>
                </div>

                <div className="marginInput">
                    <label for="exampleInputEmail1"></label>
                    <input onChange={handleChange} type="email" id="exampleInputEmail1" placeholder="Correo electrónico" name="email" value={form.email} disabled></input>
                </div>

                <div className="marginInput">
                    <label for="examplePassword"></label>
                    <input onChange={handleChange} type="password" id="examplePassword" placeholder="Contraseña" name="password" value={form.password}disabled ></input>
                </div>
                
                <button type="submit" className="button3">Guardar cambios</button>
                
            </div>
            
        </form>
        <button  onClick={handleDelete} className="button3">Eliminar cuenta</button> 
        </>
    )
}
