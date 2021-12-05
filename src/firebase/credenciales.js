// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDkjSlf1Vm9f89S90ro9-pTTNimeMiQkHA",
  authDomain: "medstudio-chat.firebaseapp.com",
  projectId: "medstudio-chat",
  storageBucket: "medstudio-chat.appspot.com",
  messagingSenderId: "383158963582",
  appId: "1:383158963582:web:c3869c3f02261daa6d372f",
  measurementId: "G-6E1D5Q75DG"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
