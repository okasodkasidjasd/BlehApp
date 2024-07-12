// Importing necessary modules
import express from 'express'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Creating an instance of Express
const app = express();

// Handling GET request to root URL '/'
app.get('/sunflower', (req, res) => {
  res.send('Devanshu abhyas kar ');
});


let port =  process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
