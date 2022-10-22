# weather

## Project setup for the frontend
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Backend Setup 

For this project, you need both the frontend and backend running at the same time. You will also need
an Api Key:

- In the `backend` folder, rename `.env.sample` to `.env`
- Generate an API key at https://openweathermap.org/
- Add your API key to `backend/.env`


### Install dependencies
```
cd backend
npm install
```

### Launch the backend
```
nodemon server.mjs OR npx nodemon server.mjs
```
