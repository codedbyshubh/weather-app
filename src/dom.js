const weatherContainer = document.querySelector(".weatherContainer");

export function displayLoading() {
  weatherContainer.innerHTML = "";

  const loader = document.createElement("div");

  loader.className = "flex justify-center items-center p-8";

  loader.innerHTML = `
    <div
      class="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
    ></div>
  `;

  weatherContainer.appendChild(loader);
}

export function displayWeather(data) {
  weatherContainer.innerHTML = "";

  const card = document.createElement("div");

  card.className = "bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-6";

  card.innerHTML = `
  <div class="text-center">
    <h2 class="text-3xl font-bold">
      ${data.location.name}
    </h2>

    <p class="text-slate-500">
      ${data.location.country}
    </p>
  </div>

  <div class="flex flex-col items-center">
    <img
      src="https:${data.current.condition.icon}"
      alt="${data.current.condition.text}"
      class="w-24"
    />

    <p class="text-6xl font-bold">
      ${data.current.temp_c}°
    </p>

    <p class="text-xl text-slate-600">
      ${data.current.condition.text}
    </p>
  </div>

  <div class="grid grid-cols-2 gap-4">
    <div class="bg-slate-100 rounded-xl p-4">
      <p class="text-sm text-slate-500">Feels Like</p>
      <p class="font-bold">
        ${data.current.feelslike_c}°C
      </p>
    </div>

    <div class="bg-slate-100 rounded-xl p-4">
      <p class="text-sm text-slate-500">Humidity</p>
      <p class="font-bold">
        ${data.current.humidity}%
      </p>
    </div>

    <div class="bg-slate-100 rounded-xl p-4">
      <p class="text-sm text-slate-500">Wind</p>
      <p class="font-bold">
        ${data.current.wind_kph} km/h
      </p>
    </div>

    <div class="bg-slate-100 rounded-xl p-4">
      <p class="text-sm text-slate-500">Local Time</p>
      <p class="font-bold">
        ${data.location.localtime.split(" ")[1]}
      </p>
    </div>
  </div>
`;

  weatherContainer.appendChild(card);
}

export function displayError(message) {
  weatherContainer.innerHTML = "";
  const errorCard = document.createElement("div");

  errorCard.className =
    "bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg";

  errorCard.textContent = message;

  weatherContainer.appendChild(errorCard);
}
