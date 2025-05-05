# Student API – PERN Stack Project

A RESTful API to manage student records including name, GPA, semester, and enrolled courses. Built using **Node.js**, **Express**, and **PostgreSQL** as part of the **PERN** stack.

---

## 🚀 Features

- Create new student records
- Retrieve all students or a specific student
- Update student information
- Delete student records
- JSONB support for storing semester and course info

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- PostgreSQL
- pg (PostgreSQL client for Node)
- UUID for unique student IDs
- dotenv for environment configuration

---

## 🗃️ Database Structure

**Table: `students`**

| Field     | Type            | Description                  |
|-----------|------------------|------------------------------|
| id        | `VARCHAR(150)`  | Primary Key (UUID)           |
| name      | `VARCHAR(30)`   | Student Name                 |
| gpa       | `DECIMAL(3,2)`  | GPA                          |
| semester  | `JSONB`         | JSON with semester & course  |

**Example of `semester` JSON:**

```json
{
  "semester": "Spring2025",
  "course": ["cse412", "cse366", "cse407"]
}
