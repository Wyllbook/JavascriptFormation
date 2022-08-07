const counterDisplay = document.querySelector("h3");
let counter = 0;
const bubbleMaker = () => {
  const bubble = document.createElement("span"); //Crée une balise span

  bubble.classList.add("bubble");
  document.body.appendChild(bubble); //va injecter le span dans le body

  const size = Math.random() * 200 + 100 + "px"; //Math.random méthode pour creer des chiffres aléatoires * 100 pour que le chiffre soit entre 0 et 100, par défaut il est entre 0 et 1

  bubble.style.height = size; //hauteur aléatoire
  bubble.style.width = size; //largeur aléatoire

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1; //randomiser le fait que le chiffre soit positif ou négatif

  bubble.addEventListener("click", () => {
    counter++; //incrémente de 1 le compteur
    counterDisplay.textContent = counter; //
    bubble.remove();
  });

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%"); //toucher pour manipuler la variable CSS
  setTimeout(() => {
    bubble.remove();
  }, 8000); //permet de détruire la bulle au bout de 8secondes
};
setInterval(bubbleMaker, 1000); //cree une bulle toute les 1s
