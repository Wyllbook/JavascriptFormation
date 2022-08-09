//1ere étape tester l'api dans un onglet

const header = document.getElementById("header");
const text = document.getElementById("content");
function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then(({ data }) => {
      //avec l'accolade plus besoin d'appeler data.data, dirige directement dans l'élément qui s'appelle data
      const { content } = data; //=>data.data.content
      console.log(content);
      header.textContent = content.text_head;
      content.textContent =
        content.text !== "" ? content.text : content.text_hidden;
    })
    .catch((err) => console.log(err));
}
getJoke();

document.body.addEventListener("click", getJoke);
