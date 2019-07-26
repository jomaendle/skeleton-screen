const mockServer = require("./mockRouter");
const express = require('express');
const app = express();


app.use('/demo', mockServer);

app.listen(3030, function () {
  console.log("Connected on port 3030.");
});
