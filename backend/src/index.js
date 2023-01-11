require("dotenv").config();
require("express-async-error");
const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const start = async function () {
  try {
    app.listen(PORT, function () {
      return console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

(function () {
  start();
})();
