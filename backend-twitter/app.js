// Le serveur backend
//  je crée les variables de tout les modules installé
const fs = require('fs');
const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const mysqlApostrophe = require('mysql-apostrophe');


// je fais appel à ma base de donnees 
 var dataBase = require('./routes/database');

//  utilisation variables des modules installé
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

// j'appel mes routes

const addUsers = require("./routes/create");
 app.use("/create", addUsers);

const addPosts = require ("./routes/postes");
app.use("/postes", addPosts);

const follow = require("./routes/follow");
app.use("/follow", follow);


app.use(mysqlApostrophe);

//Mise en place du port que le serveur va utiliser

 const port = process.env.PORT || 3005
 app.listen (port, function(){
     console.log("OK ça marche");
     console.log("Le serveur utilise le port: " + port)
 });
