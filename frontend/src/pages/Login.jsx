import { useState } from "react";
import axios from "axios";



export default function Login() {
 
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

const getUser = (e) => {
    e.preventDefault();
    
    axios
    .post(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
            email,
            password,
        },
        {
            withCredentials: true,
            credentials: "include",
        }
        )
        .then((res) => {
            console.info(res);
        })
        .then((err) => console.error(err));
        
    }
return(
    <div id="MainLogin">
      <div className="login-container">
        <h1>Connexion</h1>
        <form onSubmit={getUser}>
          <label htmlFor="name">Identifiant</label>
          <input
            type="email"
            id="email"
            placeholder="email@exemple.com"
            onChange={(event) => {
              const input = event.target;
              setEmail(input.value);
            }}
          />

          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="******"
            onChange={(event) => {
              const input = event.target;
              setPassword(input.value);
            }}
          />

          <button type="submit">Se Connecter</button>
        </form>
      </div>
    </div>
)
}