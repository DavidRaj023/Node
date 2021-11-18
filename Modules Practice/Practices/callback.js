setTimeout(() =>{
    console.log('After 3 sec')
}, 3000)

const nameList = ['David', 'Raj', 'John', 'Kumar']

const name = nameList.filter((name) => {
    //console.log(name)
})

const employee = (name, callback) => {
    setTimeout(() => {
        const data = {
            empName: name,
            empId: 1
        }
    
        //return data
        // instead of using retuen statment we need to use callback method return a data
        // Let see how?
        callback(data)
    })
}

// Its not working bez employee funtion does not return anything, retun statment only available in setTimeout function.
// const data = employee('David')
// console.log(data)

// So how do we return data ?
// We can use call back method to retun data from setTimeout functoin to employee

//employee(name, callback)
employee('David', (data) => {
    console.log(data)
})

//Note: callback function does not wait for main method to complete, It will execute before main method