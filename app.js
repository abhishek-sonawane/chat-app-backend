const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const app = express();

// -------------- middleware --------------
app.use(express.json());
app.use(cors());

// ------------- test route -------------

// app.get('/', (req,res)=>{
//     res.send('hrllo world ')
// })

app.use('/',routes)
module.exports = app;