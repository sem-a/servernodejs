const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./settings/routes');
routes(app);

app.listen(PORT, (err) => {
  if(err) return console.log(err.message);
  console.log(`Serser is start on port: ${PORT}`);
});
