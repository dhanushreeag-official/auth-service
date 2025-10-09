const express =  require('express');
const bodyParser = require('body-parser');
const routes = require('./src/Routes/index');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/Users',routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});