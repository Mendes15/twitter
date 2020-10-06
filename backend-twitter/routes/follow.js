const mysql = require('mysql');
const express = require ('express');

let bdd = require('./database');
const app = express.Router();

//  je fais ma requete creation de postes 
app.post('/newFollower', function (req, res){
    let verifRequete = ` SELECT * FROM FOLLOW WHERE id_user1="${req.body.id_user1}" and id_user2="${req.body.id_user2}" `
       
        bdd.query(verifRequete, (err, rows, fields) => {
            if (err) {
            // je verifie si existe déjà
                console.log(err.message);
                res.send(err.message);
                }else if (rows.length > 0) {
                    res.send("Tu suis deja ce user")
                    }
                 else if (req.body.id_user1 === req.body.id_user2) {
                    res.send(" NO, NO you can't follow yourself!")
                        }
                         else {
                            let addFollower = ` INSERT INTO FOLLOW (ID_USER1, ID_USER2)
                                VALUES ('${req.body.id_user1}', '${req.body.id_user2}') `
                                    bdd.query(addFollower, (errFollowing, rowsFollowing, fieldsFollowing) =>{
                                        if(errFollowing){
                                            console.log(errFollowing.message);
                                                } else {
                                                    console.log(`Le user "${req.body.id_user1}" à commencer à suivre "${req.body.id_user2}" `);
                                                    res.send(`Le user "${req.body.id_user1}" à commencer à suivre "${req.body.id_user2}" `);
                                        }

                
            })
        }
    })
})


                  

module.exports = app