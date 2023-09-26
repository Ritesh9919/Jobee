require('dotenv').config();
const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const connectDB = require('./db/mongoose');
const path = require('path')
const port = 8000;

const app = express();



// setting up view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(ejsLayout);

app.use(express.static('./public'));



app.use('/', require('./routes'));




const start = async () => {
  await connectDB(process.env.MONGO_URI);
  return app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
  })
}

start();