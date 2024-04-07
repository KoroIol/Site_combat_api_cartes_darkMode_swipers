const btnToggle = document.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {

    const body = document.body;

    if(body.classList.contains('dark')){

        body.classList.add('light')
        body.classList.remove('dark')
        btnToggle.innerHTML = "Go Dark"

    } else if(body.classList.contains('light')){

        body.classList.add('dark')
        body.classList.remove('light')
        btnToggle.innerHTML = "Go Light"

    }

})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function fetchCharacters(characters) {
  return fetch('https://hp-api.lainocs.fr/characters/' + characters)
  .then((response) => response.json())
  }

  async function displayCharacters(characters) {
    const data = await fetchCharacters(characters)
    document.getElementById("characters").innerHTML += `
    <h1>${data.name}</h1> 
    <img src="${data.image}" alt="${data.name}" />
    `
  }

displayCharacters("harry-potter")
displayCharacters("ron-weasley")
displayCharacters("draco-malfoy")