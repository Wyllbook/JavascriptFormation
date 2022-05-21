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
  response.classList.toggle("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.toggle("show-response");
  response.style.background = "red";
});

//MOUSE EVENTS
