const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(require("./src/rote"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
