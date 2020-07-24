// Pentru a putea folosii serverul este necesara instalarea tuturor pachetelor prin comanda "npm i". Dupa ce pachetele au fost instalate este necesar porninrea serverului prin comanda "node serve.js".

var cors = require("cors");
var express = require("express");
var app = express();
app.use(cors());

app.use(express.json());

app.post("/paymant", function (request, response) {
  console.log(request.body); // componenta JSON pe care o trimitem din form
  response.send({ message: "Payment was made successfully" }); // acesta este raspunsul primit daca request.body este facut cu succes.
});

app.listen(3000);
