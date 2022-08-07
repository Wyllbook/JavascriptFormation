//1ere étape tester l'api dans un onglet
function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.data.content;
      console.log(joke);
      header.textContent = data.data.content.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    })
    .catch((err) => console.log(err));
}
getJoke();

document.body.addEventListener("click", getJoke);
