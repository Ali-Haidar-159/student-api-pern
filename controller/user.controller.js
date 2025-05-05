// initial code 

"use strict";
console.clear();

// Starts The Main Code : 

// Require All The Modules , Packages And Objects : 

let {v4 : uuidv4} = require("uuid") ;
let connectionPool = require("../model/user.model") ;
let path = require("path") ;

//Controller Code : 

let getStudents = async function(req,res){

    try
    {

        let students = await connectionPool.query("SELECT * FROM students") ;

        res.status(200).json({

            success : true ,
            data : students.rows 

        });

    }
    catch(error)
    {
        res.status(400).json({

            status : 400 ,
            message : "Find error to get all students !"

        });
    }

} 

let getSingleStudent = async function(req,res){

    try
    {

        let id = req.body.id ;

        let student = await connectionPool.query("SELECT * FROM students WHERE id=$1",[id]) ;

        res.status(200).json({

            success : true ,
            data : student.rows 

        });

    }
    catch(error)
    {
        res.status(400).json({

            status : 400 ,
            message : "Find error to get student !"

        });
    }

} 
let postStudents = async function(req,res){

    try
    {

        let {name,gpa,semester,course} = req.body ;

        let semesterDetails = JSON.stringify({
            semester : semester ,
            course : course 

        }) ;

        let id = uuidv4() ;

        // console.log(semester,course) ;

        let text = `INSERT INTO students (id,name,gpa,semester)
                    VALUES ($1, $2, $3, $4) RETURNING *` ;

        // console.log(sem) ;
        
        let values = [id,name,gpa,semesterDetails];

        let newStudent = await connectionPool.query(text,values) ;

        res.status(201).json({

            success : true ,
            message : "User created successfully." ,
            data : newStudent.rows 

        });

    }
    catch(error)
    {
        res.status(400).json({

            status : 400 ,
            message : "Find error to post students !" ,
            error : error 

        });
    }

}

let putStudents = async function(req,res){

    try
    {

        let id = req.body.id ;
        let {name,gpa,semester,course} = req.body ;

        let semesterDetails = JSON.stringify({
            semester : semester ,
            course : course 

        }) ;


        let student = await connectionPool.query("UPDATE students SET name=$1 , gpa=$2 , semester=$3 WHERE id=$4",[name,gpa,semesterDetails,id]) ;

        res.status(200).json({

            message : "Data updated !" 

        });
    }
    catch(error)
    {
        res.status(400).json({

            status : 400 ,
            message : "Find error to update students !"

        });
    }

}

let deleteStudents = async function(req,res){

    try
    {

        let id = req.body.id ;

        let student = await connectionPool.query("DELETE FROM students WHERE id=$1",[id]) ;

        res.status(200).json({

            message : "Data deleted !" 

        });


    }
    catch(error)
    {
        res.status(400).json({

            status : 400 ,
            message : "Find error to delete students !"

        });
    }

}

// Exports Code :

module.exports = {

    getStudents ,
    getSingleStudent ,
    postStudents ,
    putStudents ,
    deleteStudents ,

}
