const express = require('express'),
  bodyParser = require('body-parser');

const app = express();

// top level middleware
app.use(bodyParser.json());


let employees = ['Jim', 'Pam', 'Creed', 'Dwight'];

// request level middlware
function mid(req, res, next) {
  if (req.body.username === 'mscott' && req.body.password === 'numbaoneboss') {
    next();
  } else {
    res.status(403).send('I dont think so, bub')
  }
}

app.post('/api/employees', mid, (req, res) => {
  res.status(200).send(employees)
})

const port = 3535;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})
