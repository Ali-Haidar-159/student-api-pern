// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let express = require("express") ;
let userRoute = express.Router() ;

let { getStudents, getSingleStudent, postStudents, putStudents, deleteStudents } = require("../controller/user.controller");


//Routing Code : 

userRoute.get("/students" , getStudents) ;
userRoute.get("/single-student" , getSingleStudent) ;

userRoute.post("/students" , postStudents) ;

userRoute.put("/update-student" , putStudents) ;

userRoute.delete("/delete-student" , deleteStudents)  ;

// Exports Code :

module.exports = userRoute ;
