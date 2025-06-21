// Variáveis de configuração e elementos DOM
const accessKey = process.env.PHOTO_ACCESS_KEY;
const katApi = process.env.KAT_API;
const weatherApiKey = process.env.WEATHER_ACCESS_KEY;

const apiUrl = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${accessKey}`;

const catImage = document.getElementById('cat-image');
const btn = document.getElementById('new-cat-btn');

// Funções
async function handleImage() {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Err");

    const data = await res.json();

    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  } catch (err) {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080)`;
    document.getElementById("author").textContent = `By: Dodi Achmad`;
    console.error("Err", err);
  }
}

async function handleBitcoin() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
    if (!res.ok) throw new Error("Something went wrong");

    const data = await res.json();

    document.getElementById("crypto-top").innerHTML = `
      <img src=${data.image.small} />
      <span>${data.name}</span>
    `;
    document.getElementById("crypto").innerHTML += `
      <p>🎯: $${data.market_data.current_price.usd}</p>
      <p>👆: $${data.market_data.high_24h.usd}</p>
      <p>👇: $${data.market_data.low_24h.usd}</p>
    `;
  } catch (err) {
    console.error(err);
  }
}

function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString("en-us", { timeStyle: "short" });
}

async function fetchWeather(lat, lon) {
  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherApiKey}`);
    if (!res.ok) throw new Error("Weather data not available");

    const data = await res.json();
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("weather").innerHTML = `
      <img src="${iconUrl}" alt="Weather icon" />
      <p class="weather-temp">${Math.round(data.main.temp)}º</p>
      <p class="weather-city">${data.name}</p>
    `;
  } catch (err) {
    console.error(err);
  }
}

async function fetchCat() {
  try {
    btn.disabled = true;
    btn.textContent = 'Loading...';

    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();

    catImage.src = data[0].url;
    btn.textContent = 'Get Cat';
    btn.disabled = false;
  } catch (error) {
    btn.textContent = 'Error. Try again';
    console.error('Error fetching cat:', error);
    setTimeout(() => {
      btn.textContent = 'Get Cat';
      btn.disabled = false;
    }, 2000);
  }
}

// Eventos
btn.addEventListener('click', fetchCat);

navigator.geolocation.getCurrentPosition(position => {
  fetchWeather(position.coords.latitude, position.coords.longitude);
});

// Inicializações
setInterval(getCurrentTime, 1000);

handleImage();
handleBitcoin();
fetchCat();
