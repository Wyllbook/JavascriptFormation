// **************Variable*************

// Kamelcase = commencer en minuscule et à chaque nouveau mot je met une majuscule

//Concaténation avec alt 7
let chiffre = 24;

let nouvelleChaine = ` Le chiffre attendu est  :  ${chiffre}   degrés`;

console.log(nouvelleChaine);

// **********Types de données*********

let string = "Je suis une chaine";
let number = 24;
let boolean = true; //ou  false
let array = ["je", "suis", 24, false]; //tableau
let object = {
  prenom: "Wyllem",
  age: 22,
  ville: "Guadeloupe",
};
//undefined : pas défini
console.log(typeof array); //typeof : savoir le type de la variable

// ***********opérateurs**********
//puissance => **
// incrémentation
let total = 2;
let v = 4;
//total++ équivalent à total = total + 1

// total += 5;  => total = total + 5
total += ++v;
// console.log(total);

// ************Structure de contrôle********
//égalité triple égal pour tester la valeur et le type
// égalité 2 égal pour voir si la valeur uniquement est la même
// || => ou
// && => et
// ! => différent
let x = 6;
let y = "5";
if (x === y) {
  console.log("True !");
} else if (x == y) {
  console.log("x et y égaux en valeur");
} else {
  console.log(`${x} et ${y} ne sont pas égaux`);
}

if (x != y) console.log("True !"); //syntaxe du if avec une seule condition

//ternaire
// : =>else
x == y ? console.log("True !") : console.log("False !");

// ******************Les fonctions*************
//return arrête la fonction
function faireQuelqueChose() {
  console.log("Je fais un truc");
  console.log("Trop cool");
}
faireQuelqueChose(); //appeler la fonction pour la jouer

//Fonctions fléchées
//Fonction contenue dans  () => {} qu'on met dans une constante
const faireUneTache = (tache) => {
  console.log(`Je fais ${tache}`);
};
faireUneTache("les courses");

function calc(x, y) {
  return x + y;
}

// fonction anonyme : fonction qui se joue toute seule => pas besoin de l'appeler
(function () {
  console.log("je me joue toute seule");
})();

(() => {
  console.log("Je me joue aussi toute seule");
})();
