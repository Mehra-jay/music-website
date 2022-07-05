const express =require("express");
const path=require("path");
const app=express();
const bodyparser=require("body-parser")
// var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://mihir17:ZrbsJ6C1sadyY5bU@cluster0.ssu46.mongodb.net/foodWeb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const port=8080;


// //DEFINING THE MONGOOSE SCHEMA
// var registrationSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     learn: String
// });

// var Register = mongoose.model('Register', registrationSchema); 

//EXPRESS SPECIFIC STUFF

app.use('/static',express.static('static'))//for serving the static files
app.use(express.urlencoded())


//PUG SPECIFIC STUFF
app.set('view engine','pug')//set the template engine as pug
app.set('views',path.join(__dirname,'views'))// set the views directory 



//ENDPOINT
app.get('/',(req,res)=>{
    const parass={}
    res.status(200).render('home.pug',parass)
});

app.get('/register',(req,res)=>{
    const parass={}
    res.status(200).render('register.pug',parass)
});

// app.post('/register',(req,res)=>{
//     var mydata=new Register(req.body);
//     mydata.save().then(()=>{
//         res.send("This has been saved to the database successfully")
//     }).catch(()=>{
//         res.status(400).send("Item was not saved to the database")
//     });

//     // res.status(200).render('register.pug')
// });

// app.get("/static/bg3.jpg", function(req, res){
//     res.writeHead(200, {'Content-Type': 'image/jpeg'});
//     res.end("bg3.jpg");
//   })


//start the server
app.listen(port, ()=>{
    console.log(`The application has been started successfully on ${port}`)
});

