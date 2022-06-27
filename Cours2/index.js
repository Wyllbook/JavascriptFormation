// **************SELECTEURS**************
// document.querySelector("h4").style.background = "yellow";.style=>  attibut pour injecter du style css suivi d'un attibut css
// const baliseHTML = document.querySelector("h4"); => Cloisonner éléments dans une variable.

// ****************** addEventListener************

//CLICK EVENT
// En javaScript le tiret n'est pas pris en compte, il faut utiliser du kamelCase ex :borderRadius.
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// addEventListener('événement',function{}) =>syntaxe du addEventListener
questionContainer.addEventListener("click", () => {
  questionContainer.classList.add("question-clicked"); //classlist => propriété pour  injecter une classe
  //toggle permet d'ajouter  au premier click une classe puis retirer au second click
  //add permet d'ajouter
  //remove pour retirer la classe
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//MOUSE EVENTS

//Mouse move
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px"; //postion de la souris en temps réel sur l'axe des X.
  mousemove.style.top = e.pageY + "px"; // position de la souris en temps réel sur l'axe des Y.
});

//Mousedown
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "2px solid teal";
}); //Evenement lorsque la souris est appuyé

//Mouseup
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = " 2px solid pink";
}); //Evenement lorsque la souris est relâché

//MouseEnter
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
// Evènement lorsque la souris survol une zone

//Mouseout
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
}); //Evènement lorsque la souris sort de la zone du mouseenter

//Mouseover
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
}); //Meme chose qu'un hover Css

// **********************KEYPRESS***************

//KEYPRESS EVENT

const ring = (key) => {
  const audio = new Audio();
  //Objet de Javascript qui a été créé dans le code source pour faire de l'audio.
  //Quand  j'appelle la vatiable audio c'est que c'est un nouveau objet audio.
  audio.src = key + ".mp3";
  audio.play(); //Méthode de l'objet audio pour jouer la musique.
};

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
//  lorsqu'une touche est appuyé on se met sur l'objet le plus haut sur le DOM(document)
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "h") {
    keypressContainer.style.background = "royalblue";
  } else if (e.key === "g") {
    keypressContainer.style.background = "blue";
  } else {
    keypressContainer.style.background = "green";
  }
  if (e.key === "g") ring(e.key);
}); // Evènement lorsqu'on appui sur une une touche et qu'on veut déclencher un évènement

// *****************SCROLL EVENT**********
//Quand je vais scroller un certain nombres de pixels la navbar va se révéler.
const nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
  //window.scrollY => valeur en pixel du scroll
});

// ***************FORM EVENTS************
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
let pseudo = "";
let language;
const form = document.querySelector("form");

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value; //Stocker la valeur de l'input text dans une variable.
});
select.addEventListener("input", (e) => {
  language = e.target.value; //stocker la valeur du select(langage favoris).
});
//A la base un formulaire change de page quand on le valide, pour éviter cela on va faire e.preventDefault.
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Permet de se prémunir du comportement par défaut du navigateur.
  //On est pas besoin de déclarer une variable pour les checkboxs et les boutons(html).
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo: ${pseudo}</h3>
    <h4>Language préféré: ${language}</h4>
    
    `; //innerHTML permet d'injecter des balises HTML directement dans un code javascript.
  } else {
    alert("Veuillez accepter les CGV");
  }
});

// *************LOAD EVENT************
//Load event se déclenche quand toute la page a été chargée.
// window.addEventListener("load", () => {
//   console.log("Document chargé");
// });

// ***************FOR EACH******************
//Foreach permet de sélectionner plusieurs éléments
const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.9)"; //réduit toute les boites au clique.
  });
});

// *********************AddEventListener VS onclick*************************
// document.body.onclick =  () => {
//   console.log("Click !");
// };
//Méthode accepté mais pas recommandé car on ne peut pas propager 2 fois le meme évenement sur une balise
//On peut l'adosser à du Html

//Bubbling => déclencher un èvenement à lmla fin( de base l'eventlistener est paramétré en mode Bubling et il est de base sur false)
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Click 1");
//   },
//   false
// );

// //UseCapture => se déclenche devant les autres addeventlistener
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("Click 2");
//   },
//   true
// );

// *******************StopPropagation******************
// questionContainer.addEventListener("click", (e) => {
//   // alert("Test !");
//   e.stopPropagation();
// });

//removeEventListener

// ***************BOM************
// BOM => Browser Object Model
// console.log(window.innerHeight); //=> savoir la hauteur de notre fenetre
// window.open("https://web.whatsapp.com/", "cours js", "height=600, width=800");
// // window.close()

// Evenement adossé à window
// alert("hello")
// confirm
btn2.addEventListener("click", () => {
  confirm("voulez vous vraiment vous trompez ?");
});

//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom !");
  questionContainer.innerHTML += `<h3> Bravo ${answer}</h3>`;
});

//timer, compte à rebours
// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px"; //logique à exécuter
//   questionContainer.style.transition = "2.25s";
// }, 2000); //temps en millisecondes avant de se déclencher

//Pour arréter le setInterval il faut le déclarer dans une variable
// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class='box'>
// <h2>Nouvelle Boîte !</h2>
// </div>`;
// }, 1000); // va injecter la div toute les 1s au body(boucle infini)

// //e.target.remove() permet de retirer un élément du DOM
// // document.body.addEventListener("click", (e) => {
//   console.log(e.target); //montre dans la console sur l'élément dont a cliqué
//   clearInterval(interval);
// }); //stop le setInterval

//Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("https://www.youtube.com/watch?v=Cpke7ZnJJvA"); //rediriger vers un autre lien

// window.onload = () => {
//   location.href = "http://twitter.fr";
// };
//au chargement de la page ça va nous rediriger vers Twitter

//Navigator
//console.log(navigator.userAgent); //afficher sur la console les données de navigation
//https://developer.mozilla.org/fr/docs/web/API/Geolocation/getCurrentPosition

// var options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   var crd = pos.coords;

//   console.log("Votre position actuelle est :");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude : ${crd.longitude}`);
//   console.log(`La précision est de ${crd.accuracy} mètres.`);
// }

// function error(err) {
//   console.warn(`ERREUR (${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

//History
// console.log(history);
// window.history.back();
// history.go(-2) //revenir à 2 pages en arriere

// ***************Set Property***********
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
