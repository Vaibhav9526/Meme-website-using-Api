// fetching api

function getMeme() {
  const imageRandom = document.getElementById("i");
  const randomImageApiUrl = "https://meme-api.herokuapp.com/gimme";
  fetch(randomImageApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      imageRandom.src = data.url;
    })
    .catch(function (error) {
      console.log(error);
    });
}
