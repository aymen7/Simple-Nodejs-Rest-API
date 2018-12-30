// required the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');
// a const to hold the port we gonna use
const PORT = 3000;
//create an instance of express
const app = express();
// specify the body parser middleware to handle JSON data
app.use(bodyParser.json());
//this mean when we navigate to the /api use the api route
app.use('/api',api);

app.listen(PORT,()=>{
    console.log(`Express server is listening on port ${PORT}`);
});
