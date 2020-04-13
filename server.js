'use strict';
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require("body-parser")
const path = require("path")

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'GuessingGame';
// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true })

// Constants
const PORT = 8080;

// App
const app = express();
app.use(express.static(__dirname))
app.use(bodyParser.json())


// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const col = db.collection('students');

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
  })


  app.get("/game/", (req, res) => {
    res.sendFile(path.join(__dirname + "/game.html"))
  })


  app.get('/', (req, res) => {
    // Get first two documents that match the query
    col.find({}).limit(1).toArray(function(err, docs) {
      assert.equal(null, err);
      res.send(JSON.stringify(docs));
      // client.close();
    });
  });
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);