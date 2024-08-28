const path         = require('path');
const bodyParser   = require('body-parser');
const express      = require('express');


console.log('in')
const routes          = require('./controller/index');

const assetFolder  = path.resolve(__dirname, '../dist/');
const port         = 5000;
const app          = express();

app.use(express.static('./public'));
app.use(bodyParser.json());


// app.use('/', routes);
// app.use('/api/AllState', routes, (req, res) => res.sendStatus(401));
app.get("api/AllState", routes.getItems);
app.listen(port, () => console.log(`Server is listening on port ${port}`));