const dotenv = require('dotenv');
dotenv.config(); // Load environment variables as early as possible
const databaseConnection = require('./config/dbConfig');
const express = require('express');
const userRouter = require('./routes/userRoute');
const app = express();
const PORT = process.env.PORT || 8000;
const cookieParser = require('cookie-parser');
const cors = require('cors')

//Configur CORS
app.use(cors({
    origin: "http://localhost:3000",
    methods: 'GET,POST,PUT,DELETE', 
    credentials: true, 
  }));

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
