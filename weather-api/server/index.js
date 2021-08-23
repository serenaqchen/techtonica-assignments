const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const searchHistory = [];

app.post("/search", (req, res) => {
  const search = req.body;
  // console.log(req);
  console.log(search);
  searchHistory.push(search);
  res.sendFile(`${__dirname}/../client/public/index.html`)
});

app.get("/searchHistory", (req, res) => {
  res.send(searchHistory)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});