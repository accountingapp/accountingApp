const express = require("express");
const bodyParser = require("body-parser")
const path = require("path")
const app = express();
const PORT = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'dev';
const knex = require('./knexfile');
const pg = require('knex')(knex[env]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('*', function(request, response) {
   response.sendFile(path.resolve(__dirname, './dist/index.html'));
 });

app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});