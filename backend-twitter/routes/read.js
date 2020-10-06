const mysql = require('mysql');
const express = require ('express');

let bdd = require('./database');
const app = express.Router();


// app.post('/newUser', function (req, res){

//     let addUser = ` INSERT INTO `
//     bdd.query(addUser, (err, rows, fields) =>{
//         if(err){
//             console.log(err.message);
//         } else{

//         }
//     })
// })