import "./style.css";
import { getWeatherData } from "./weather";
import { displayWeather, displayError, displayLoading } from "./dom";

const searchForm = document.querySelector(".searchForm");
const searchInput = document.querySelector(".searchInput");

async function searchWeather(city) {
  try {
    displayLoading();

    await new Promise(requestAnimationFrame);

    const weatherData = await getWeatherData(city);

    displayWeather(weatherData);
  } catch (error) {
    displayError(error.message);
  }
}

async function initApp() {
  await searchWeather("Faridabad");
}

initApp();

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = searchInput.value.trim();

  if (!city) return;

  await searchWeather(city);
  searchInput.focus();
});
