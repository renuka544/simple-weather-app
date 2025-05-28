const apiKey = '889744f616109cc6ca33f2150edcd4ab'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weather = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>🌡️ ${data.main.temp}°C</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Icon">
      `;
      document.getElementById('weatherResult').innerHTML = weather;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
