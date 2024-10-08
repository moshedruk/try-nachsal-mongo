const dotenv = require('dotenv');
const cors = require('cors');
const exp = require('express');
const { specs, swaggerUi } = require('./config/swagger');
const auth = require('./routes/authRouter');
const user = require('./routes/userRouter');
const greenEye = require('./routes/greenEetRouter');
const { connectToMongo } = require('./config/dbConfig');
const cookieParser = require('cookie-parser');

const app = exp();
dotenv.config();
app.use(cors());
connectToMongo()
const port  = process.env.PORT


app.use(exp.json())
app.use(cookieParser())
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use('/auth', auth)
app.use('/user', user)
app.use('/greenEye',greenEye )

app.get('/', (req,res) => res.send('Hello Worldwwwwwwww!'))
// Server running message
app.listen(port,() =>  console.log(' listening on port ' + port));