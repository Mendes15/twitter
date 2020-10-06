//  création var mysql pour utiliser la base de donne en utilisant module mysql
var mysql = require('mysql');

// connexion à la base de donnes: infos recuper sur mamp
const bddConnexion = mysql.createConnection({
    host: "localhost",
    database:"user_twitter",
    user:"root",
    password:"root",
    port: 8889,
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    strict: false 
});

// vérification connexion bdd
bddConnexion.connect((err) => {
    if(err) {
        console.log(err.message);
    } else {
        console.log("Connexion à la base réussi")
    }
});

module.exports = bddConnexion