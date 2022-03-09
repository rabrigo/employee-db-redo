-- SELECT
--     roles.title,
--     roles.salary,
--     departments.name
-- FROM roles
-- RIGHT JOIN departments ON departments.id = roles.department_id;

-- SELECT
--     emp.id,
--     emp.first_name,
--     emp.last_name,
--     mgr.first_name AS manager_firstname,
--     mgr.last_name AS manager_lastname
-- FROM employees emp
-- LEFT JOIN employees mgr ON emp.manager_id = mgr.id;

SELECT
    employees.id,
    employees.first_name,
    employees.last_name,
    employees.manager_id,
    roles.title,
    roles.salary,
    departments.name AS department
FROM employees
INNER JOIN roles ON roles.id = employees.role_id
RIGHT JOIN departments ON departments.id = roles.department_id;
