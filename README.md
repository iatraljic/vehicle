# Vehicle Management

https://iatraljic-vehicle.herokuapp.com/

Projekt je realiziran sa:

- [node](https://nodejs.org/en/)
- [express](https://expressjs.com/)
- [react](https://reactjs.org/) ([create-react-app](https://create-react-app.dev/))
- [bootstrap](https://getbootstrap.com/)

## Struktura

```
root (index.js)
├───000 (pomoćni fileovi, zadatak...)
├───server (back-end)
│   ├───data (data access, business logic)
│   └───routes (rute)
└───client (react, create-react-app)
    ├───src
    │   ├───components (dumb komponente)
    │   │   ├───Footer
    │   │   ├───NewVehicle
    │   │   ├───Layout
    │   │   ├───Header
    │   │   └───SearchBar
    │   ├───pages (Home page)
    │   └───context (smart context)
    ├───build (build production folder)
    └───public
```

## Available Scripts

_U root-u možete startati:_

### `npm install`

Instalira dependencies u root folderu i client folderu

### `npm run dev`

Starta aplikaciju u development modu
Link [http://localhost:3000](http://localhost:3000).

Veza s back-endom preko development porta :8080
`"proxy": "http://localhost:8080/",`

I back-end i front-end je hot reload.

### `npm start`

Builda react client aplikaciju (front-end) za production i starta node aplikaciju (back-end).

## Deployment

CI/CD master brancha na Heroku
https://iatraljic-vehicle.herokuapp.com/

## Napomene

1. Dilema mi je bila kako pristupiti .json data fileu sa stajališta pretraživanja, razmišljao sam o kreiranju b-tree indexa, ali elemenata je premalo pa sam odustao
2. Također sam razmišljao o cache-u, opet kako je file premali ostavio sam ga kao global array `let all = []` u [commonjs fileu](https://github.com/iatraljic/vehicle/blob/master/server/data/index.js)
3. Iduće razmišljanje je bilo o race conditionu kod snimanja promjena, ali sam zaključio da to kao i povremeni reload .json data filea nadilaze zadatak
4. Najviše sam vremena posvetio filtriranju koje može krenuti od make ili model ili year, a da se u ostalim dropdownima prilagodi sadržaj, izuzetno optimiziran algoritam za to je u funkciji [getFiltered](https://github.com/iatraljic/vehicle/blob/eb6bc106b1689a3980a36fda516dd35eaa867426/server/data/index.js#L70)
5. Mislim da kroz code možete vidjeti da business logic držim odvojeno od view komponenti, da rute držim odvojeno od data acessa tako da ako se sutra promijeni baza podataka mijenja se samo data access, da baratam s nodeom, reactom, CI/CD i algoritmima...
6. Ako želite neko proširenje zadatka - javite
