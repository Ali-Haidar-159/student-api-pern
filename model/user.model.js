// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let {Pool} = require("pg") ;

// Connect With Server : 

let connectionPool = new Pool({

    host : "localhost" ,
    user : "postgres" ,
    password : "postgre-sql" ,
    port : 5432 ,
    database : "my_api"

}) ;

// Exports Code :

module.exports = connectionPool ;
