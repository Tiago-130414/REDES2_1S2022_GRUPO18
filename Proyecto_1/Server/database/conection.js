const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB

mongoose.connect(MONGODB_URL,
    {useNewUrlParser:true}
)  
    .then(db => console.log('Database connected'))
    .catch(err => console.log('Database not connected'));
module.exports = mongoose;