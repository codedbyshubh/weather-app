const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeatherData(city) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (!city || city.trim() === "") {
      throw new Error("Please enter a city name");
    }

    if (/^\d+$/.test(city.trim())) {
      throw new Error("Please enter a valid city name");
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city.trim())}`,
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
