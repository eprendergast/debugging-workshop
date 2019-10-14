const form = document.getElementById('joke-form')
const jokeList = document.getElementById('joke-list')

document.addEventListener('DOMContentLoaded', () => {

  form.addEventListener('submit', (event) => fetchJoke(event))

  function fetchJoke(event){
    event.preventDefault();

    let username = document.getElementById('name-input').value

    if(username === "") {
      return false;
    } else {
      fetch('https://icanhazdadjoke.com/', {
        headers: {
          "Accept": "application/json"
        }
      })
      .then(res => res.json())
      .then(joke => renderJoke(joke))
    }
  }

  function renderJoke(joke){
    let username = document.getElementById('name-input').value
    let newJokeLi = document.createElement('li')
    newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${joke.joke}`
    jokeList.appendChild(newJokeLi)
  }

})