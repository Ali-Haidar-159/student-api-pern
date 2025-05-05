// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let app = express() ;

let http = require("http") ;
let morgan = require("morgan") ;
let cors = require("cors") ;
let path = require("path") ;
const userRoute = require("./router/user.router");

//Creating Server : 

let myServer = http.createServer(app) ;

// Connect With Server : 

app.use(express.urlencoded({extended:true})) ;
app.use(express.json()) ;

app.use(morgan("dev")) ;
app.use(cors()) ;

app.use(userRoute) ;

// Request-Response-Cycle : 

app.get("/" , function(req,res){

    res.status(200).send("Home pages") ;

}) ;

// Handle The Route Error 

app.use(function(req,res,next){

    res.status(200).json({

        status : 404 ,
        message : "Page Not Found !!!"

    }) ;

}) ;

// Handle The Server Error 

app.use(function(err,req,res,next){

    res.status(500).json({

        status : 500 ,
        message : "Find The Server Error !!!" ,
        error : err.message 

    });

});


// Exports Code :

module.exports = myServer ;
