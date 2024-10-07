const dotenv = require('dotenv');
const cors = require('cors');
const exp = require('express');
const auth = require('./routes/authRouter');
const user = require('./routes/userRouter');
const greenEye = require('./routes/greenEetRouter');

const app = exp();
dotenv.config();
app.use(cors());
const port  = process.env.PORT


app.use(exp.json())

// Routes
app.use('/auth', auth)
app.use('/user', user)
app.use('/greenEye',greenEye )

app.get('/', (req,res) => res.send('Hello Worldwwwwwwww!'))
// Server running message
app.listen(port,() =>  console.log(' listening on port ' + port));