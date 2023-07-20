const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const { compoundRouter } = require('./src/routes/compounds.routes');

const app = express();
app.use(cors());
const port = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use('/compounds', compoundRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});