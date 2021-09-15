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
