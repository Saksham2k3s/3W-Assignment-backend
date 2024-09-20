const dotenv = require('dotenv');
dotenv.config();
const databaseConnection = require('./config/dbConfig');
const express = require('express');
const userRouter = require('./routes/userRoute');
const app = express();
const PORT = process.env.PORT || 8000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000'
const cookieParser = require('cookie-parser');
const cors = require('cors')

//CORS options

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: 'GET,POST,PUT,DELETE', 
  credentials: true, 
}
//Configur CORS
app.use(cors(corsOptions));

//Database Connection
databaseConnection();

// Middleware
app.use(express.json()); 
app.use(cookieParser())

//Router Import
app.use('/api/v1/user', userRouter)

//Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
