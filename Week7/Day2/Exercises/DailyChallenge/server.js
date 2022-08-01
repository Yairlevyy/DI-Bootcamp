const express = require('express');
const app = express();

app.listen(8000, ()=>{
  console.log('Server is running on port 8000');
})

app.get('/aboutMe/:hobby', (req,res) => {
	const hobby = req.params.hobby;
	if (typeof hobby === 'string' ) {
		return res.json(hobby)
	} else {
		return res.status(404).json({msg:'Hobby not valid, sorry!'})
	}
});

app.get('/pic', function(req,res){
 res.sendFile(__dirname + '/public/pic.html');
}); 

app.get('/form', function(req,res){
 res.sendFile(__dirname + '/public/form.html');
});

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/formData', function(req,res){
 
res.send(`${req.body.email} sent you a message "${req.body.message}"`)


});