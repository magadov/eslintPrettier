const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const url = 'mongodb+srv://into:code@cluster0.aiq2g.mongodb.net/eslintPrettier'
const router = require('./routes/books.route')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cors());
app.use(router);

async function start() {
  try {
    await mongoose.connect(url, {
      useUnifiedTopology:true,
      useNewUrlParser:true,
      useFindAndModify:false
    });
    app.listen(3010, () => {
      console.log('Server успешно запущен...')
    })
  } catch (e) {
    console.log(e.message())
  }
}

start();

