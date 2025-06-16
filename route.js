import { afficherPageConnexion ,accOunt ,chat } from "./src/main"

const routes = {
"/connexion": afficherPageConnexion ,
"/accOunt" :accOunt ,
"/chat" :chat
}

export function route( chemin ) {
    // const app = document.getElementById("app")
  const vue = routes[chemin]

  if (vue){
    vue ();
  } 
}
  


//   app.innerHTML=''
//   app.appendChild(vue())






