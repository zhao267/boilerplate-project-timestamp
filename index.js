// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/:date?', (req, res) => {
  const dateStr = req.params.date;
  let date;
  if (!dateStr) {
    date = new Date();
  } else if (!isNaN(dateStr)) {
    date = new Date(parseInt(dateStr));
  } else {
    date = new Date(dateStr);
  }

  if (date.toString() === 'Invalid Date') {
    return res.json({ error: 'Invalid Date' });
  }

  const unix = Math.floor(date.getTime() / 1000);
  const utc = date.toUTCString();

  res.json({ unix, utc });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
