const target = document.getElementById("target");

let array = ["développeur", "photographe", "data-analyst"];
let wordIndex = 0;
let letterIndex = 0;

//logique pour creer une lettre
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2800); //au bout de 2.8s les lettres se retire
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2900);
    }
  }, 80);
};
loop();
