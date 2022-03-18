require('dotenv').config(); 
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5500;
app.use(express.json());
const router = require('./routes');
app.use(router);
app.get('/' ,function(req, res){
	res.send("Hello from express JS");
});


app.listen(PORT,()=>console.log(`Listening on port ${PORT}`))



