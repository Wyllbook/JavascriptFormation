const buttons = document.querySelectorAll(".btn"); //Sélectionnez tout les boutons.
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
    console.log(e.target.id);
  });
});

//Etant donné que equal est un bouton avec un id, on a pas besoin de le pointer.
equal.addEventListener("click", () => {
  console.log(eval(result.textContent));
  result.textContent = eval(result.textContent); //Méthode permettant de calculer à l'intérieur de la parenthèse.
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
