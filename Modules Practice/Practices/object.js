//Object Properties 

const name = 'david'
const age = 23

const userDetails = {
    name,
    age,
    locataiom: 'Trichy'
}

console.log(userDetails) //{ name: 'david', age: 23, locataiom: 'Trichy' }

console.log(userDetails.name) // david

//Object destructuring

const employee = {
    empName: 'Kumar',
    empAge: 23,
    empAddress: 'something',
}

// if we need only one property from employee
const name2 = employee.empName
console.log(name2) // Kumar

// if we need more than one property from employee
// if we need more than one property from employee and need to use different name 
const {empName, empAge:Age, empAddress} = employee
console.log(empName) // Kumar
console.log(Age)


