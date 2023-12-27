export async function handler(event, context) {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);

    if (!response.ok) {
      throw new Error("Something went bad, API KEY or API SITE could be the problem.");
    }

    const data = await response.json();
    const rates = data.conversion_rates;

    return {
      statusCode: 200,
      body: JSON.stringify({ rates }),
    };
  } catch (error) {
    console.error('Error while trying to get data from API service. ', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
}
