

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const questionFile = require('./questions')

//creating the express app
const app = express();
//setting the port
const PORT = process.env.PORT || 3001;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());



app.get("/questions", (req, res) => {
  res.json(questionFile);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
