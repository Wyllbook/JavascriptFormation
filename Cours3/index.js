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
    admin: false,
  },
  {
    pseudo: "Ludovic",
    age: 21,
    techno: ["CSS", "HTML", "java"],
    admin: false,
  },
  {
    pseudo: "Darryl",
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
