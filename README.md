# Restaurant-React-Node

# Node App

REST API built with Node, Express, MYSQL

## Requirements

- Node.js 14 (LTS) or greater

## Setup

1. Clone Repo
2. Locate Backend Folder
3. Run command

```
npm install
```

4. Setup a database and add .env variables in /database/config/sequelize.js then run migrations (`npx sequelize-cli db:migrate`)

5. Start server 

```
npm run dev
```


```

6. Use endpoints for create Restaurants, Styles and Meals

```
POST
http://localhost:3000/api/meals/add
```
BODY
{"name":"sushi", "restaurant_id":3}

```
POST
http://localhost:3000/api/style/add
```
BODY
{"name":"vista de la ciudad", "restaurant_id":3}

```
POST
http://localhost:3000/api/restaurants/add
```
BODY
{"name":"el mirador sushi"}
```

## React App


## Setup

1. Clone Repo
2. Locate Frontend/restaurante Folder
3. Run command

```
npm install
```

4. Run command

```
npm start
```




