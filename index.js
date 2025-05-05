// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let myServer = require("./app") ;

let chalk = require("chalk") ;
require("dotenv").config() ;

//Listen The Server : 

let PORT = process.env.PORT || 5000 ;

myServer.listen(PORT , function(){

    console.log(chalk.bold.bgRed.italic(`Server is running at http://localhost:${PORT}...`)) ;

})

// Exports Code :


