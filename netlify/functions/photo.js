exports.handler = async function(event, context) {
  const accessKey = process.env.PHOTO_ACCESS_KEY;
  if (!accessKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'PHOTO_ACCESS_KEY not set' })
    };
  }

  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${accessKey}`;

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
