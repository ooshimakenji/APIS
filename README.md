# Personal Dashboard

Dashboard pessoal estilo new tab com informações em tempo real: clima, cotação de criptomoedas, foto do dia e gatos aleatórios.

## Funcionalidades

- Relógio em tempo real
- Cotação do Bitcoin (CoinGecko API)
- Clima local (via Netlify Functions)
- Foto de fundo do Unsplash
- Widget de gatos aleatórios
- PWA instalável (manifest.json)

## Stack

- HTML5 + CSS3
- JavaScript vanilla
- Netlify Functions (proxy para APIs)
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
