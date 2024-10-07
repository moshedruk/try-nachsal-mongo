const dotenv = require('dotenv');
const exp = require('express');

const app = exp();
dotenv.config();
const port  = process.env.PORT


app.listen(port,() => console.log(' listening on port ' + port));