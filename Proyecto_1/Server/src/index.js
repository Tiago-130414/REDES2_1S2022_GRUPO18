const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

//settings
app.set('port',process.env.PORT)
app.use(express.json())
app.use(cors());

//routes
app.use('/',require('./routes/home'));
app.use('/',require('./routes/administradores'));
app.use('/',require('./routes/desarrolladores'));

//server listening
app.listen(app.get('port'), ()=>{
    console.log('Backend on port',app.get('port'));
});