# Personal Dashboard

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black) ![Netlify](https://img.shields.io/badge/Netlify-Functions-00C7B7?logo=netlify&logoColor=white) ![PWA](https://img.shields.io/badge/PWA-instalável-5A0FC8) ![Licença](https://img.shields.io/badge/licença-MIT-green)

Dashboard pessoal estilo "new tab" com informações em tempo real: clima, cotação de criptomoedas, foto do dia e gatos aleatórios.

## Funcionalidades

- Relógio em tempo real
- Cotação do Bitcoin via CoinGecko API
- Clima local via Netlify Functions (proxy OpenWeather)
- Foto de fundo do Unsplash
- Widget de gatos aleatórios
- PWA instalável (manifest.json)

## Stack

- HTML5 + CSS3
- JavaScript vanilla
- Netlify Functions (proxy para APIs externas)
- APIs: CoinGecko, Unsplash, OpenWeather

## Instalação

```bash
git clone https://github.com/ooshimakenji/APIS.git
cd APIS
npm install
npm start
```

## Deploy

Configurado para Netlify com serverless functions em `netlify/functions/`.

```bash
npm run build
```

## Licença

MIT
