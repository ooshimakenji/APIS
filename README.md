# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite

## Environment Variables
API requests for the background image and weather data are now proxied through Netlify Functions. Set the following variables in your Netlify project settings (or a local `.env` file) so these functions can access the API keys:

- `PHOTO_ACCESS_KEY`
- `WEATHER_ACCESS_KEY`

The weather endpoint is configured to return temperatures in **Celsius**.

## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)

Happy Coding!