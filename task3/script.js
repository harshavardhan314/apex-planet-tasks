async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const APIKey = "198a218e2881f6e4599c877cf043c707"; // Replace with your actual key

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${APIKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      document.getElementById("weatherResult").innerHTML = "City not found.";
      return;
    }

    const data = await response.json();
    const resultHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Condition: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind: ${data.wind.speed} m/s</p>
    `;

    document.getElementById("weatherResult").innerHTML = resultHTML;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching data.";
  }
}

