document.addEventListener('DOMContentLoaded', function() {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(fetchWeatherData, showError);
  });
  
  function fetchWeatherData(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = '4c655f5bc88fec0a138e148cb972a717'; 
    // Make API request to get weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        displayWeatherData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  function displayWeatherData(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
  
    const location = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
    const description = data.weather[0].description;
  
    locationElement.textContent = location;
    temperatureElement.textContent = `${temperature}°C`;
    descriptionElement.textContent = description;
  }
  
  function showError(error) {
    console.log('Error:', error.message);
  }
  