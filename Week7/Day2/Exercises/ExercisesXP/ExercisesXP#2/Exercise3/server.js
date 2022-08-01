const express = require('express');

const app = express();

app.listen(2000, ()=>{
  console.log('Server is running on port 2000');
})

app.use('/',express.static(__dirname+'/public'));
