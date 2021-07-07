import { useHistory, Redirect } from "react-router-dom";
import { useForm } from "../../hooks/UseForm";
import { LOGIN_URL } from "../../config/config";
import m5 from "../../image/m5.png";
import { NavLink } from "react-router-dom";
import {useAuthContext} from "../../context/AuthContext";
import swal from "sweetalert";

export default function Input() {

    //hook creado useForm
    const formInitialState = ""; //dejamos vacio los inputs de email y password
    const [form, handleChange] = useForm(formInitialState);
    const {signIn, isAuthenticated} = useAuthContext();
    const history = useHistory();

    function handleClick() {
        history.push(`/register`)
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options);
        const data = await response.json();
        console.log(data);

        if(response.status >=200 && response.status < 300){
          signIn(data.token, data.user);
          history.push("/inicio")
        }else {
            swal(
                'Contraseña o Usuario incorrectos!',
                'vuelve a intentarlo!',
                'warning'
              )
        }
    };


    return isAuthenticated ? <Redirect to="/inicio"/> : (
        <div className="">
            <form onSubmit={handleSubmit} >
                <div>
                    <img className="logo" alt="" src={m5}></img>
                </div>

                <div>
                    <label className="labell" for="exampleInputEmail1">Usuario</label>
                </div>

                <input onChange={handleChange} type="email" className="input" value={form.email} name="email" id="exampleInputEmail1" placeholder="Correo electrónico"></input>

                <div>
                    <label className="labell" for="exampleInputEmail1">Contraseña</label>

                </div>
                <input onChange={handleChange} type="password" className="input" value={form.password} name="password" id="exampleInputEmail1" placeholder="*****************"></input>

                <div>
                    <button className="button1">Iniciar Sesión</button>
                </div>

                <div className="link">
                    <NavLink className="link" exact to="/forgetpassword">¿Has olvidado la contraseña?</NavLink>
                </div>

                <button onClick={() => handleClick()} className="button2">Crear cuenta nueva</button>
            </form>
        </div>
    )
}
