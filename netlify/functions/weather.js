exports.handler = async function(event, context) {
  const apiKey = process.env.WEATHER_ACCESS_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'WEATHER_ACCESS_KEY not set' })
    };
  }

  const { lat, lon } = event.queryStringParameters || {};
  if (!lat || !lon) {
    return { statusCode: 400, body: JSON.stringify({ error: 'lat and lon required' }) };
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
