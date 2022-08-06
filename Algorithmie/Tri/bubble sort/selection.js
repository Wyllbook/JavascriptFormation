//Le Selector sort va parcourir le tableau  et va chercher à savoir l'élément le plus petit du tableau pour le mettre en premier et ainsi de suite
function selectionSort(array) {
  for (i = 0; i < array.length - 1; i++) {
    let minIndex = i; //stocker le plus petit élément
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  console.log(array);
}
selectionSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);
