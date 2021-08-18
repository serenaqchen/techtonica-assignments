//importing the express framework
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

//creating the express app
const app = express();
//setting the port
const port = process.env.PORT || 3000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World, from Express');
  });

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');

});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));