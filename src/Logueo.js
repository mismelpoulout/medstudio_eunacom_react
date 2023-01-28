import React from "react";
import { app } from "./fb";
import logo from './icons/logo.png';
import './App.css';
import swal from "sweetalert";


const Logueo = (props) => {
  const [isRegistrando, setIsRegistrando] = React.useState(false);

  const crearUsuario = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("usuario creado:", usuarioFirebase);
        props.setUsuario(usuarioFirebase);
      });
  };

  const iniciarSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((usuarioFirebase) => {
        console.log("sesión iniciada con:", usuarioFirebase.user);
        props.setUsuario(usuarioFirebase);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      crearUsuario(correo, password);
    }

    if (!isRegistrando) {
      iniciarSesion(correo, password);
    }
  };
  const mostrarAlert=()=>{
    swal({
      icon:"info",
      timer:"2000",
      text:"este registro es solo con fines administrativos sus datos estan protegidos por firebase console de Google",
    });
  }
  
  return (
    <div className="container">
      <div onClick={()=> mostrarAlert()}></div>
      <div className="form">
      <center>
        <img className="log" alt="icon" src={logo} />
      </center>
        <main className="form-signin">
          <h1 className="h3 mb-3 fw-normal"> {isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>
          <br />
          <form onSubmit={submitHandler}>
            <div className="form-floating">
              <input className="form-control" type="email" id="emailField" placeholder="Correo"  />
              <label for="floating" > Correo </label>
            </div>
            <br /><br />

            <div className="form-floating">
              <input className="form-control" type="password" id="passwordField" placeholder="Contraseña"/>
              <label for="floatingPassword" htmlFor="passwordField"> Contraseña </label>
              </div>
              <br />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              {" "}
              {isRegistrando ? "Regístrate" : "Inicia sesión"}{" "}
            </button>
          </form>
          <hr />
          <button className="w-100 btn btn-lg btn-danger" onClick={() => setIsRegistrando(!isRegistrando)}>
            {isRegistrando
              ? "¿Ya tienes cuenta? ¡Inicia sesión"
              : "¿No tienes cuenta? ¡Regístrate gratis!"}
          </button>
          <center>
            <p className="mt-5 mb-3 text-muted">encoded <a href="mailto:hola@lasfi.to" >Lasfito</a> &copy; 2021</p>
            <p className="mt-5 mb-3 text-muted">Copyright <a href="mailto:medstudioparato2@gmail.com">Medstudio</a> & Co &copy; 2020–2023</p>
          </center>
        </main>
      </div>
    </div>
  );
};

export default Logueo;

