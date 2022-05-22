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
  ring(e.key);
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
