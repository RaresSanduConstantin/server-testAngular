var cors = require("cors");
var express = require("express");
var app = express();
app.use(cors());

app.use(express.json());

app.post("/paymant", function (request, response) {
  console.log(request.body); // your JSON
  response.send({ message: "Payment was made successfully" }); // echo the result back
});

app.listen(3000);
