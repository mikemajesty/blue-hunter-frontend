const express = require('express');
const app = express();
const path = require('path');
// ...
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 3000);