const mysql = require('mysql');
const express = require ('express');

let bdd = require('./database');
const app = express.Router();

//  je fais ma requete creation  
app.post('/newUser', function (req, res){
    let verifRequete = ` SELECT * FROM USER WHERE email_user="${req.body.email_user}"`
       
        bdd.query(verifRequete, (err, rows, fields) => {
            if (err) {
            // je verifie si existe déjà
                console.log(err.message);
                res.send(err.message);
                } else if (rows.length > 0) {
                    res.send("la valeur saisie existe déjà")
                    } else {
                        let addUsers = ` INSERT INTO USER (EMAIL_USER, PSEUDO_USER, PASSWORD_USER)
                            VALUES ('${req.body.email_user}', '${req.body.pseudo_user}', '${req.body.password_user}') `
                            bdd.query(addUsers, (errAdding, rowsAdding, fieldsAdding) =>{
                                    if(errAdding){
                                        console.log(err.message);
                                        } else {
                                            res.send(`'Creation nouveau utilisateur "${req.body.email_user}" reussi `);
                                            res.send(`'Creation nouveau utilisateur "${req.body.email_user}" reussi `);
                                        }
                
            })
        }
    })
})


                  
                       
              


module.exports = app