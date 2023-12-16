const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
const errorHandler = require("./middleware/error_handler");
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("uploads"));

app.use(router);
app.use(errorHandler);
app.use(morgan("tiny"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
