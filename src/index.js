const express = require("express");
const app = express();
const morgan = require("morgan");

// solutions cors problem
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Settings
app.set("port", process.env.PORT || 3001);

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.json({
    version: "CommentApp | Alpacorp | V1 | Todos los derechos reservados",
  });
});

// starting server
app.listen(app.get("port"), () => {
  console.log(`Server started on port ${app.get("port")}`);
});
