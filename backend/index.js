const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config({ path: __dirname + "/.env" });

const port = process.env.PORT || 3500;

// Connect to database
const database = require("./database/config/sequelize");
database
  .authenticate()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log("Connection to database failed");
  });

const routes = require("./routes/index");

// Routing
app.use("/api", routes);

app.listen(port, () => console.log(`Servidor Iniciado en puerto ${port}...`));
