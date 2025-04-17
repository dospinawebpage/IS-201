const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { 'Accept': 'application/json' }
    });
    const data = await response.json();
    jokeEl.textContent = data.joke;
  } catch (error) {
    jokeEl.textContent = 'Oops! Something went wrong. Try again later.';
  }
}
