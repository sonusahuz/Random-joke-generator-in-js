const jokebtn = document.getElementById("jokebtn");
const joke = document.getElementById("joke");

jokebtn.addEventListener("click", function () {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (joke.innerHTML = data.joke))
    .catch((error) => {
      console.log(error);
    });
});
