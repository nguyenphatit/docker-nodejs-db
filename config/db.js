const mongoose = require('mongoose');

const url = 'mongodb://mongo:27017/docker-node-db';

const connectDB = () => {
  mongoose.connect(url, () => {
    console.log("Connected to MongoDB");
  })
}

module.exports = connectDB;