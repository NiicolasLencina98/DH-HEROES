const express = require('express')

const app = express()

const path = require('path')

const port = 3030

//para que tome el css y img
app.use(express.static('./src/public'));

app.listen(port, () => console.log("FUNCIONA!"))


app.get('/' , (req, res) => {
    res.sendFile(path.resolve('./src/views/index.html'))
});

app.get('/babbage', (req, res) => {
  res.sendFile(path.resolve('./src/views/babbage.html'))
});


app.get('/berners', (req, res) => {
  res.sendFile(path.resolve('./src/views/berners.html'))
});


app.get('/clarke', (req, res) => {
  res.sendFile(path.resolve('./src/views/clarke.html'))
});

app.get('/hamilton', (req, res) => {
  res.sendFile(path.resolve('./src/views/hamilton.html'))
});

app.get('/hopper', (req, res) => {
    res.sendFile(path.resolve('./src/views/hopper.html'))
  });

  app.get('/lovelace', (req, res) => {
    res.sendFile(path.resolve('./src/views/lovelace.html'))
  });

  app.get('/turing', (req, res) => {
    res.sendFile(path.resolve('./src/views/turing.html'))
  });




