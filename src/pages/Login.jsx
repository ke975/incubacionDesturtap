import React from "react";
import "../styles/Login.scss";
import Beach from "../assets/beachLandin.png";
import Logo from "../assets/logo-paraTraveling-safe.gif";
import Google from "../assets/search.png";
import facebook from "../assets/face.png";
import Modal from "react-modal";
import { firebase } from "../services/firebase";
import { useContext, useState } from "react";
import { AuthContext } from "../context/autContext";
import { useHistory } from "react-router-dom";
import '../styles/ResponsiveLogin.scss'
Modal.setAppElement("#root");

export function Login() {
  const history = useHistory();
  const { sigInWithGoogle, user, sigInWithFacebook } = useContext(AuthContext);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailCreate, setEmailCreate] = useState("");
  const [passCreate, setPassCreate] = useState("");
  const [error, setError] = useState(null);
  const [error1, setError1] = useState(null);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleCreateUser(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailCreate, passCreate)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        closeModal();
        // ...
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError1("Usuario o contraseña incorrecta");
        }
        if (error.code === "auth/wrong-password") {
          setError("Usuario o contraseña incorrecta");
        }
        console.log(error.code);
        console.log(error.message);

        if (!emailCreate.trim()) {
          console.log("Datos vacíos email!");
          setError("Datos vacíos email!");
          return;
        }
        if (!passCreate.trim()) {
          console.log("Datos vacíos email!");
          setError("Datos vacíos contraseña!");
          return;
        }
        // ..
      });
  }

  function procesarDatos(e) {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
        history.push("/");
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setError("Usuario o contraseña incorrecta");
        }
        if (!email.trim()) {
          console.log("Datos vacíos email!");
          setError("Datos vacíos email!");
          return;
        }
        if (!pass.trim()) {
          console.log("Datos vacíos email!");
          setError("Datos vacíos contraseña!");
          return;
        }
      });

    setEmailCreate("");
    setPassCreate("");
  }

  async function Login() {
    if (!user) {
      await sigInWithGoogle();
    }
    history.push("/");
  }

  async function LoginFacebook() {
    if (!user) {
      await sigInWithFacebook();
    }
    history.push("/home");
  }

  return (
    <div id="page-Auth">
      <aside>
        <img src={Beach} alt="" />
      </aside>
      <main>
        <div className="main-content">
          <img
            src={Logo}
            alt="Logo de Trsavelin safe"
            width={700}
            height="500"
          />

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
          >
            <form onSubmit={handleCreateUser}>
              <h1>Registraté</h1>
              {error? (
                <div className="alert alert-danger">{error}</div>
              ) : null}

              <input
                type="email"
                value={emailCreate}
                placeholder="ingrese su email"
                onChange={(e) => setEmailCreate(e.target.value)}
              />
              <input
                type="password"
                value={passCreate}
                placeholder="Ingrese su contraseña"
                onChange={(e) => setPassCreate(e.target.value)}
              />
              <button>Registrase</button>
            </form>
          </Modal>

          <form onSubmit={procesarDatos}>
            {error ? <div className="alert  text-center col-sm-4 col-md-12">{error}</div> : null}

            <input
              type="email"
              name="email"
              placeholder="Ingrese su E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              placeholder="ingrese su Contraseña"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />

            <button type="submit" className="btn btn-warning">
              Entrar
            </button>
            <button onClick={Login}>
              
              <img src={Google} width={30} height={30} alt="" />
              Iniciar Session con Google
            </button>
            <button onClick={LoginFacebook}>
              <img src={facebook} alt="Logo do google" width={30} height={30} />
              Iniciar Session con Facebook
            </button>
            <button className="Register" onClick={openModal}>
              Registrarse
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
