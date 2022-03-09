const mysql = require('mysql2');
// const express = require("express");
const inquirer = require("inquirer");
// const { listenerCount } = require('mysql2/typings/mysql/lib/Connection');
// const app = express();
const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

let departmentArr;
let departmentChoices;
let placeHolder = ["Test 1", "Test 2"];

const viewDepartments = () => {
    db.query(`SELECT * FROM departments`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
        userChoices();
    });
}

const addDepartment = () => {
    // get all departments
    db.query(`SELECT * FROM departments`, (err, result) => {
        if (err) {
            console.log(err);
        }
        departmentArr = result;
        console.log(departmentArr);
        departmentChoices = departmentArr.map(department => `${department.name}`);
        // departmentChoices = JSON.stringify(departmentArr);
        console.log(departmentChoices);
        console.log(placeHolder);
    });

    inquirer.prompt([
        {
            type: "input",
            message: "What department would you like to add?",
            name: "department"
        }
    ]).then((response) => {
        db.query(`INSERT INTO departments (name) VALUES ("${response.department}")`),
            (err, result) => {
                if (err) {
                    console.log(err);
                }
            }
        console.log(response);
        userChoices();
    })
}

const addRole = () => {

    // get all departments
    db.query(`SELECT * FROM departments`, (err, result) => {
        if (err) {
            console.log(err);
        }
        departmentArr = result;
        // console.log(departmentArr);
        departmentChoices = departmentArr.map(department => `${department.id}) ${department.name}`);
        // departmentChoices = JSON.stringify(departmentArr);
        // console.log(departmentChoices);
        // console.log(placeHolder);
    });

    const rolePrompt = () => {
        inquirer.prompt([
            {
                type: "input",
                message: "What is the title of the role you would like to add?",
                name: "title"
            },
            {
                type: "list",
                message: "What department is this role in?",
                choices: departmentChoices,
                name: "department"
            },
            {
                type: "input",
                message: "What is the salary of this role?",
                name: "salary"
            }
        ]).then((response) => {
            // only numbers up until parenthesis
            const depIdRegex = /[0-9][^)]*/
            const depId = response.department.match(depIdRegex);
            console.log(depId);
            db.query(`INSERT INTO roles (title, department_id, salary) VALUES ("${response.title}", ${depId}, "${response.salary}")`),
                (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                }
            console.log(response);
            userChoices();
        })
    }
    // give time to load departments into array
    // without this, the department choices array is undefined
    setTimeout(rolePrompt, 400);
}

const viewRoles = () => {
    db.query(`SELECT * FROM roles`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
        userChoices();
    });
}

const viewEmployees = () => {
    const query =
    `
    SELECT
    employees.id,
    employees.first_name,
    employees.last_name,
    roles.title,
    roles.department_id,
    roles.salary,
    employees.manager_id
    FROM employees
    INNER JOIN roles ON roles.id = employees.role_id
    INNER JOIN departments ON departments.id = roles.department_id;
    `
    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
        userChoices();
    });
}

const userChoices = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: ["View departments", "View roles", "View employees", "Add department", "Add role", "Exit"],
            name: "choice"
        }
    ]).then((response) => {
        if (response.choice === "View departments") {
            viewDepartments();
        }
        if (response.choice === "View roles") {
            viewRoles();
        }
        if (response.choice === "View employees") {
            viewEmployees();
        }
        if (response.choice === "Add department") {
            addDepartment();
        }
        if (response.choice === "Add role") {
            addRole();
        }
        if (response.choice === "Exit") {
            process.exit(0);
        }
    });
}

console.log("Welcome to the Employee Tracker!");
userChoices();