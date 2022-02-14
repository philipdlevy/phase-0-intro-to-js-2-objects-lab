const employee = {
    name: "philip",
    streetAddress: "123 West Drive"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee, [key]: value};
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const deleteEmployee = {...employee[key]};
    return deleteEmployee;
}

/*
function deleteFromEmployeeByKey(employee, key) {
    const copyEmployee = {...employee};  
    delete copyEmployee[key]
    return copyEmployee;
    }
*/


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}















