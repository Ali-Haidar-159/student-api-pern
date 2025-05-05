-- Creating database : 
CREATE DATABASE my_api ;


-- Shifting in the new database
\c my_api 


-- Creating the table 
CREATE TABLE students 
(
    id VARCHAR(150) PRIMARY KEY ,
    name VARCHAR(30) NOT NULL ,
    gpa DECIMAL(3,2) NOT NULL ,
    semester JSONB NOT NULL
) ;


-- inserting data into the database 

INSERT INTO students (id,name,gpa,semester)
VALUES ($1 $2 $3 $4) RETURNING * , [id,name,gpa,semester]


