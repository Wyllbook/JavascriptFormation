//API sont des services web  qui fournissent des données API=> Application Programming Interface.

//XMLHttpRequest
function reqListener() {
  //   console.log(this.responseText);
}
let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
req.open("get", "https://api.blablagues.net/?rub=blagues", true);
req.send();

//-------------------------
//FETCH
//-------------------------

// Voir les differents status d'une réponse

//Syntaxe du fetch
// fetch("lien", "objet d'options")
//   .then((response) => {
//     //response
//   })
//   .catch((error) => console.log(error));
fetch("data.txt")
  .then((res) => res.text())
  .then((data) => console.log(data));
fetch("data.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

//objets d'options
const myHeaders = new Headers(); //objet js pour paramétrer l'header de l'objet
const init = {
  method: "GET", //par défaut l'option de requete est en "GET"
  header: myHeaders,
  mode: "cors", // mode de transmission, cors: gère les permissions
  cache: "default",
};
fetch("data.json", init).then((res) => console.log(res));
//CRUD=> create(¨POST),read(GET),update(PUT),delete(DELETE)
//POST=>incrémente des données dans la bdd
//GET=>lire les données
//PUT => Update met à jour les données
//DELETE +> supprime les données

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    //stringify=> méthode pour convertir en json
    pseudo: "Laurianne",
    age: 22,
  }),
  mode: "cors",
  credentials: "same-origin",
};
const init3 = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },

  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/users", init2).then(() =>
    console.log("data envoyée")
  );
});

//******ASYNCHRONE
setTimeout(() => {
  console.log("test");
}, 2000);

//PROMISE
// fetch("monlien").then((res) => res); //mettre l'action dans une promesse

//async/await
async function fetchData() {
  await fetch("monlien"); //=> attendre d'exécuter le fetch et ensuite exécuter le reste du code
  executeFunction();
}
//la fonction fléchée est une variable qui stocke une fonction
const fetchData2 = async () => {
  await fetch("monlien");
  executeFunction();
};

//*************JSON************ */

//Méthode .json() => méthode qui s'auto-résout en renvoyant le body de la requête
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log(JSON.stringify(data)); //=> stringify permet de convertir un objet js ou une valeur en json
    let settings = JSON.stringify(data);
    // Parse => transforme json en objet js
    console.log(JSON.parse(settings));
  });

// **************Web API***********
// API présent de base dans le navigateur

//CLIENT STORAGE
//---------------

//Local Storage
//les cookies ont une capacité de stockage de 4 ko
//le local storage a une capacité de 10 mo
localStorage.data = "Je stocke de la data ";
console.log(localStorage.data);
// document.body.textContent = localStorage.data;

//Supprime ce qu'il y a dans le localStorage
localStorage.removeItem("data");

const obj = {
  name: "Denis",
  age: 22,
};
//il faut passer des chaînes de caractères
localStorage.user = JSON.stringify(obj);

// console.log(JSON.parse(localStorage.user));

//Session Storage
// Ce qui est dans le session storage est stocké pendant la durée de la session de la page de l'utilisateur
// sessionStorage.dataSettings = "55px";
sessionStorage.clear();

//************COOKIES*********** */
