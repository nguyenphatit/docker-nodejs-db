const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

connectDB();
const port = process.env.NODE_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/users', require('./routers/user'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})