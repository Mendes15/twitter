const mysql = require('mysql');
const express = require ('express');

let bdd = require('./database');
const app = express.Router();

//  je fais ma requete creation de postes 
app.post('/newPost', function (req, res){
    let verifRequete = ` SELECT * FROM POSTES WHERE id_poste="${req.body.id_poste}"`
       
        bdd.query(verifRequete, (err, rows, fields) => {
            if (err) {
            // je verifie si existe déjà
                console.log(err.message);
                res.send(err.message);
                } else if (rows.length > 0) {
                    res.send("la valeur saisie existe déjà")
                    } else {
                        let addPost = ` INSERT INTO POSTES (ID_USER, CONTENU_POSTE, DATE_CREATION)
                            VALUES ('${req.body.id_user}', '${req.body.contenu_poste}', '${req.body.date_creation}') `
                            bdd.query(addPost, (errPosting, rowsPosting, fieldsPosting) =>{
                                    if(errPosting){
                                        console.log(errPosting.message);
                                        } else {
                                            console.log(`Le user vient de faire un poste`);
                                            res.send(`'Le user  vient de faire un poste`);
                                        }
                
            })
        }
    })
})


                  

module.exports = app