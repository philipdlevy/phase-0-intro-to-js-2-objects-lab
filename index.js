
let employee = { 
    name: "John",
    streetAddress: "111 Baseline",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee, [key]: value};
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, ) {
    const deleteEmployee = {...[employee] };
    return deleteEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
};



















