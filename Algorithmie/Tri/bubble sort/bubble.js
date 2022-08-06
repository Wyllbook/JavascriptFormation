//Bubble sort est un tri qui compare si l'élément de gauche est plus grand que son voisin et s'il est plus grand les intervertient

function bubbleSort(array) {
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        //         // let temp = array[j];
        //         // array[j] = array[j + 1];
        //         // array[j + 1] = temp;
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  console.log(array);
}

//Méthode sort
function bubble(array) {
  console.log(array.sort((a, b) => a - b));
}

bubble([451, 2, 65, 4, 7, 98, 2, 3, 1]);
