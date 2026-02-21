
const apiUrl = '/.netlify/functions/photo';

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
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    const data = await res.json();
    document.getElementById("crypto-top").innerHTML = `
      <img src="${data.image.small}" />
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

setInterval(getCurrentTime, 1000);

navigator.geolocation.getCurrentPosition(async (position) => {
  try {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const res = await fetch(`/.netlify/functions/weather?lat=${lat}&lon=${lon}`);
    if (!res.ok) {
      throw new Error("Weather data not available");
    }
    const data = await res.json();

    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather").innerHTML = `
      <img src="${iconUrl}" alt="Weather icon" />
      <p class="weather-temp">${Math.round(data.main.temp)}º</p>
      <p class="weather-city">${data.name}</p>
    `;
  } catch (err) {
    console.error(err);
  }
});

handleImage();
handleBitcoin();

const catImage = document.getElementById('cat-image');
const btn = document.getElementById('new-cat-btn');

async function fetchCat() {
  try {
    btn.disabled = true;
    btn.textContent = 'Loading...';

    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    const imageUrl = data[0].url;

    catImage.src = imageUrl;
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

btn.addEventListener('click', fetchCat);

// Load the first cat image when the page loads
fetchCat();
