// EXERCISE 1

const express = require('express');

const app = express();

app.listen(3000, ()=>{
  console.log('Server is running on port 3000');
} );

const user = {
        firstname: 'John',
        lastname: 'Doe'
    }

app.get('/api',(req,res)=>{
  res.json(user)
})

app.use('/',express.static(__dirname+'/public'));

// EXERCISE 2

app.get('/api/:id',(req,res)=>{
  const id = req.params;
  console.log(id)
});

