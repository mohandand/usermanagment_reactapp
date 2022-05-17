//Importing Libraries  and using them
import express from 'express';
import {readFile, writeFile} from 'fs/promises';    

const app = express ();

//Middleware code
app.use(express.static('public'));
app.use(express.json());


//Importing Data Files for read and write.

const userdb = JSON.parse(await readFile(new URL('./usersdata.json', import.meta.url)));

const userdata = [];

//Decalring Port and Host to run server
var port = 5000;
var host = '127.1.1.1';



//Creating APIs 

app.get('/users',function(req,res){

    res.send(userdb);
    
});

//API for recive and store Signup data.

 app.post('/signup', function(req,res){

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
        userdata.push(user);
        writeFile("usersdata.json", JSON.stringify(userdata, null, 2));
        res.send(userdata);
 });

 //API for receive login data and checking with usersdata.


//Listening to Server
app.listen(port,host, function(){
    console.log("Listening...");
})

//http://127.1.1.1:5000/

//why mjs extension : To load an ES module, set "type": "module" in the package.json or use the .mjs extension.