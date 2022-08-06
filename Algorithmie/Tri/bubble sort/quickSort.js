//Quick sort permet de  trier en faisant 2 tableaux  en fonction d'une valeur pivot situer a la fin du tableau, untableau gauche ou sont les plus petites valeurs et une a droite avec les plus grands valeurset ces tableaux seront eux meme retrier en quicksort jusqu'a ce que le tableau soit trié

function quickSort(array) {
  if (array.length === 1) {
    return array;
  } //=>permet de ne pas faire une boucle infini en lui disant quand tu as un élément tu te stop

  const pivot = array[array.length - 1]; // prendre le dernier élément (52) comme pivot
  let arrayLeft = [];
  let arrayRight = [];
  for (i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? arrayLeft.push(array[i]) : arrayRight.push(array[i]); //mettre les éléments plus petit que le  pivot à gauche et plus  grand à droite
  }
  //console.log(arrayLeft, arrayRight);
  if (arrayLeft.length > 0 && arrayRight.length > 0) {
    console.log(arrayLeft, pivot, arrayRight);
    return [...quickSort(arrayLeft), pivot, ...quickSort(arrayRight)]; //spread operator'...) qui permet de casser pour mettre tout les éléments cote a cote dans le tableau
  } else if (arrayLeft.length > 0) {
    console.log(arrayLeft);
    return [...quickSort(arrayLeft), pivot];
  } else {
    console.log(arrayRight);
    return [pivot, ...quickSort(arrayRight)];
  }
}

quickSort([21, 458, 5, 87, 13, 2, 7, 97, 1, 25, 6, 97, 10, 502, 444, 52]);
