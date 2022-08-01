//Rappel des types de données
let string = "Chaîne";
let number = 25;
let boolean = true;
let maVariable; // type Undefined

//Tableaux
let array = ["Bordeaux", "Toulouse", "Guadeloupe"];

let array2 = ["Guadeloupe", 24, true, [1, 2], { nom: "Denis" }];

//Object
//Dans un object le premier élément s'appelle un index et le deuxième est la valeur
let object = {
  pseudo: "Wyllem",
  age: 22,
  techno: ["javaScript", "React", "NodeJs"],
  admin: false,
};
//Ajoutez un élément dans object
object.adress = "706 chemin plessis";

//Quand on a plein d'object on les stocke dans un tableau
let data = [
  {
    pseudo: "Wyllem",
    age: 22,
    techno: ["javaScript", "React", "NodeJs"],
    admin: true,
  },
  {
    pseudo: "Ludovic",
    age: 21,
    techno: ["CSS", "HTML", "java"],
    admin: false,
  },
  {
    pseudo: "Darril",
    age: 26,
    techno: ["CSS", "Python", "PHP"],
    admin: false,
  },
];

//Structure de controle
//syntaxe if
// if (valeur à tester)
//     valeur si vraie
//     else
//     valeur si faux  //syntaxe à utiliser si on a une seule ligne

//while
let w = 0;
while (w < 10) {
  w++;
}

//do While
let d = 0;
do {
  d++;
} while (d < 5);

//les boucles for
for (const user of data) {
  //const user of data =>veut dire que chaque élément individuellement va s'appeler user
  //   document.body.innerHTML += `<li>${user.pseudo}  ${user.age} ans</li>`;
}
//on déclare la valeur de i /i va contituer tant que i n'est pas arrivé à la fin de l'object data / on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  document.body.innerHTML += `<h2>${data[i].techno.join(" / ")}</h2>`;
}

//SWITCH
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;

    case "php":
      document.body.style.background = "var(--blue)";
      break;

    case "python":
      document.body.style.background = "orange";
      break;

    default:
      break;
  }
});

//************Méthodes String
let string2 = "Javascript est un langage orienté objet";
// typeof
// méthodes qui permet de savoir le type d'une v ariable
//eval =>méthode de calcul
//parseInt=>méthode qui transforme une chaîne de caractère en number
//isNaN=>is not a number
//length =>compte le nombre de caractère démarre à 0
//indexOf=> dis à quel index le mot commence

//slice => permet de découper des chaines de caractères de manière précise
//let newString = string2.slice(2);
// let newString = string2.slice(5, 17);
//split => permet de séparer une chaine de caractère à partir de ce qu'on lui met en paramètre
//toLowerCase => permet de mettre toute une chaîne de caractère en minuscule
//toUpperCase=>mettre en majuscule
//replace permet de remplacer une chaine de caractère par une autre
// console.log(string2.replace("Javascript", "PHP"));

//*******************Méthodes pours les Numbers */
let number2 = 42.1234;
console.log(number2.toFixed(1));
console.log(parseFloat(number2));

//Math
console.log(Math.PI);
console.log(Math.round(6.5)); //méthode pour arrondir
console.log(Math.floor(4.9)); //arrondir au plus bas
console.log(Math.ceil(4.9)); //arrondir au plus haut
console.log(Math.pow(2, 7)); //puissance
console.log(Math.sqrt(25)); //racine carrée
console.log(Math.random()); //affiche un chiffre au hasard entre 0 et 1( multiplie par 50 pour avoir un chiffre entre 0 et 50)

//**********************Méthodes pour les tableaux */
let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidyty"];
//concat permet de fusionner 2 tableaux
// let newArray = array3.concat(array4);
// console.log(newArray);
let newArray = [...array3, ...array4]; //=>2eme méthode pour fusionner des tableaux
console.log(newArray);
//.split va casser le tableau par ce qui est mis en paramètre
console.log(array3.join("-")); //permet de transformer le tableau en chaine de caractère en séparant les différentes chaîne par ce qui est mis en paramètre.
console.log(newArray.slice(2, 5));
array3.forEach((languages) => console.log(languages));
// console.log(array3.indexOf("Python"));
console.log(array3.every((language) => language == "Php")); //=>permet de savoir si Php est écrit partout dans le tableau
console.log(array3.some((language) => language == "Php")); //=>permet de savoir si Php est écrit au moins une fois
//shift =>permet de retirer le premier élément du tableau
// let shift = array3.shift();
//pop => retire le dernier élément du tableau
// console.log(array3.pop());

const restArray = array3.splice(1, 2, "C++");
console.log(array3); // =>va retirer l'élément positionnner à 1 jusqu'à l'élément 2 et va les remplacer par C++

//IMPORTANT//
let arrayNumber = [4, 74, 28, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y)); // =>méthode pour faire une oppération sur tout les éléments d'un tableau

//ajouter un élément à un tableau
arrayNumber.push(22);
console.log(arrayNumber);

//A RETENIR//
// FILTER, SORT, MAP

//FILTER => permet de filtrer les éléments d'un tableau
console.log(arrayNumber.filter((number) => number > 10)); // =>va afficher tout les chiffres sup à 10

//SORT => permet de trier des éléments d'un tableau (par défaut il classe par rapport au premier index)
// console.log(arrayNumber.sort());
console.log(arrayNumber.sort((a, b) => b - a)); // => b-a =décroissant , a-b =croissant

//ex de syntaxe :console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b));

//MAP
//permet de lister
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join(" ");

//*****************Méthodes pour les objets
document.body.innerHTML += data
  .filter((user) => user.admin === false) //filtrer les utilisateurs qui ne sont pas modérateurs
  .filter((user) => user.pseudo.includes("i")) //includes permet de voir si dans un des pseudo il y a un "i"
  .sort((a, b) => b.age - a.age) // classer les utilisateurs par rapport à leur age
  .map(
    (user) =>
      `
<div class="user-card">
<h2>${user.pseudo}</h2>
<p> Age : ${user.age} ans</p>
<p> Status : ${user.admin ? "modérateur" : "membre"}</p>
</div>

`
  )
  .join(" "); //lister les utilisateurs

//   **********Les Dates
//Date classique
let date = new Date();
// console.log(date);

//Tmestamp=> nombre de seconde qui s'est écoulé entre le 1er janvier 1970 à aujourd'hui en milliseconde
let timestamp = Date.parse(date);
// console.log(timestamp);

//IsoString
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}
// console.log(dateParser(date));
// console.log(dateParser(iso));
// console.log(dateParser(timestamp));

//******************Destructuring */
let moreData = {
  destVar: ["Element 1", "Element 2"],
};
const { destVar } = moreData; // équivaut à const destvar = moreData.destVar
console.log(moreData.destVar[0]);

let array5 = [70, 88, 90];
let [x, y, z] = array3;
console.log(x, y, z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
console.log(dateDestructuring(iso));

// ********* Les Datasets
//Les datasets sont des données que l'on peut mettre dans les balises
const h3js = document.getElementById("javascript");

const h3 = document.querySelectorAll("h3");

h3.forEach((language) => {
  //   console.log(language.dataset.lang);
});

// ****************Les Regex
//Les Regex sont des expresssions régulières, tester des chaines de caracteres et voir si elles correspondent elle renvoie 0 si c'est true et -1 si false
let mail = "wyllemblou2@gmail.com";
// console.log(mail.search(/wyllem/));

// console.log(mail.replace(/wyllemblou/, "wyllbook")); => remplace wyllemblou par wyllbook

// console.log(mail.match(/Wyllemblou/i)); //ignoreCase
// console.log(mail.match(/[wug]/)); //=> s'il y a au moins un w un u ou un g

// // Tous les chiffres
// console.log(mail.match(/\d/));

// // Toute les lettres
// console.log(mail.match(/[a-z]/));

console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));
let separator = 26526489123;
console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")); //to String passer en chaine de caractere
