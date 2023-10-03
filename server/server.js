const express = require("express");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
var corsOptions = {
    origin: "*"
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));


// simple route
app.get("/", (req, res) => {
    res.json({message: "Hello world!"});
});

// require("./app/routes/weather.routes.js")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
