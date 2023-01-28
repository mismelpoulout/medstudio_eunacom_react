import React from "react";
import { app } from "./fb";

import menu from './icons/menu.svg';
import exit from './icons/exit.svg';
import leftarrow from './icons/leftarrow.svg';
import googleplay from './icons/googleplay.svg';

import './css/loader.css';
import './css/main.css';
import './css/fonts.css';
import './css/header.css';
import './css/sidenav.css';
import './css/footer.css';
import './css/layers.css';
import './css/exam.css';
import './css/videoPlaylist.css';

import Main from './main';



const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div className="container">

      <br />

      <header className="App-header">
        <img src={leftarrow} class="icon btn-closeLayer" id="btn-closeLayer" alt="back" />
        <img src={menu} id="open-sideMenu" class="icon trigger-layer" data-layername="side-nav" alt="menu" />
        <img src={exit} class="icon btn-closeQuiz" id="btn-closeQuiz" alt="back" />
        <h1 class="appName" id="title">Medstudio</h1>
      </header>
      <br />


      <div className="clouse">
        <button className="btn btn-primary btn-sm ml-auto" onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>
      <div className="text-center">

        <br />
        <br />
        <main>
          <Main />
          <br />
          <center>
            <br />
            <section class="container">
              <p>Encuentra nuestra app en Google play</p>
              <a href="https://play.google.com/store/apps/details?id=com.medstudio4all.medstudio">
                <img class="google-play" alt="icon" src={googleplay} />
              </a>
            </section>
          </center>
        </main>
      </div>
    </div>
  );
};

export default Home;
