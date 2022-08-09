let userData;
const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results))
    .catch((err) => console.log(err));
  console.log(userData);
};

const userDisplay = async () => {
  await fetchUser();

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    return newDate;
  };

  //soustraire la date d'aujourd'hui à la date d'enregistrements pour obtenir le nombre de jours auxquelles la personne est enregistée
  const dayCalc = (date) => {
    let today = new Date();
    let todayTimestamp = Date.parse(today);
    let timestamp = Date.parse(date);
    return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
  };

  document.body.innerHTML = userData
    .map(
      (user) =>
        `<div class="card">
        <img src=${user.picture.large} alt="photo de ${user.name.last}">
    <h3>${user.name.first} ${user.name.last}</h3>
    <p> ville: ${user.location.city}, ${dateParser(user.dob.date)}</p>
    <em>Membre depuis : ${dayCalc(user.registered.date)} jours </em>
    </div>
  `
    )
    .join("");
};
userDisplay();
