//LES OBJETS
//Evitez les fonctions fléchées en POO

let array = [1, 2, 3];
// console.log(typeof array);
// console.log(typeof document.body);
// console.log(typeof null);

//On peut accoler des fonctions à cette objet appelée méthode
const obj = {
  //index :value
  pseudo: "Wyllbook",
  ville: "Guadeloupe",
  admin: false,
  direBonjour: function () {
    console.log("Bonjour je suis" + " " + this.pseudo); //this permet de désigner les choses à l'intérieur même d'un objet}

    //   direBonjour() {}, =>manière pour déclarer une fonction dans un objet
  },
};

//Ajouter un objet
obj.age = 24;
obj["admin"] = true;

//Modifier
obj.pseudo = "wyllem";

//Supprimer
delete obj.ville;

//Checker si une propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Parcourir un objet
for (const key in obj) {
  //   console.log(key + " : " + obj[key]);
}

console.log(obj.direBonjour());

// ************ Méthodes native (méthode présente dans le code source de js) ********

//Obtenir les clés
const keys = Object.keys(obj);
// console.log(keys);

//Obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

//Creer des tableaux pour chacun des éléments
const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
  pseudo: "Blou",
};

//Fusionner des objets
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);
//si les  objets ont une meme clé(index) c'est le dernier annoncé qui l'emporte

//Empeche les modificatons
// const newObj = Object.freeze(obj);
// newObj.pseudo = "Test"; //=>essaye de modifier pseudo

//Empeche de rajouter d'élément
// const newObj = Object.seal(obj);
// newObj.adresse = "la voute";
// console.log(newObj);

// *******************CONSTRUIRE DES OBJETS(CONSTRUCTEUR)************
//Une fonction dans un objet est une méthode
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.getCity = function () {
    console.log(this.pseudo + " " + "habite à" + " " + this.ville); //=> this fait référence à l'objet qui a été instancier.
  };
}

const user1 = new User("Dede", "Guadeloupe"); //new User est appelée l'instance de l'objet
const user2 = new User("Denis", "Nantes");
// console.log(user2.getCity());

//----------------------------
//Factory functions
function User3(pseudo, ville) {
  return {
    pseudo, //=>équivaut à pseudo:pseudo
    ville,
  };
}
const user4 = User3("Titis", "Guadeloupe");
// console.log(user4);

// **************Class***********
//Creer une classe
class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  //METHODES
  sayMyName = function () {
    console.log("Bonjour je suis" + " " + this.pseudo);
  };
}

const user5 = new Utilisateur("chiefKeef", "Chicago");
//Ajouter un prototype dans la classe
Utilisateur.prototype.sayCity = function () {
  console.log("j'habite à" + " " + this.ville);
};
//les méthodes déclarées dans le prototype d'une classe sont plus rapides que les méthodes déclarées directement dans une classe
Object.assign(Utilisateur.prototype, {
  method1() {
    // Ma méthode
  },
  method2() {
    // Ma méthode
  },
});
console.log(user5.sayCity());

// *********L'HÉRITAGE******
