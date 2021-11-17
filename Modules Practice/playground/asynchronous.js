const { endianness } = require("os")
const { setFlagsFromString } = require("v8")

console.log('Starting...')
console.log('one')

setTimeout(() => {
    console.log('after 3 sec')
}, 3000)

setTimeout(() => {
    console.log('after 2 sec')
}, 2000)

setTimeout(() => {
    console.log('after 1 sec')
}, 1000)

console.log('two')
console.log('end')

// Output:
// Starting...
// one
// two
// end
// after 1 sec
// after 2 sec
// after 3 sec

  // Call Stack                 Node Api               Event Loop              Output
    // Main
    // log('Starting...')
    //                                                                         Starting...
    // Main
    // log('one')
    //                                                                         one
    // Main
    // setTimeout(3 Sec)
    
    // Main                    setTimeout(3 Sec)
    
    // Main
    // setTimeout(2 sec)
    
    // Main                    setTimeout(2 sec)
    
    // Main
    // setTimeout(2 sec)
    
    // Main                    setTimeout(2 sec)

    // Main                                            
    // setTimeout(1 sec)                               
                                                    
    // Main                    setTimeout(1 sec)
    //                                                 After 1 sec:
    //                                                 setTimeout(1 sec)
    //                                                 After 2 sec:
    //                                                 setTimeout(2 sec)
    //                                                 After 3 sec:
    //                                                 setTimeout(3 sec)
    // Main
    // log('two')                                      

    // Main                                                                      two

    // Main
    // log('end')

    // Main                                                                       end

    // Main(Got removed)
    // But programe still runs remain asyncronous function

    // setTimeout(1 sec)
    //                                                                             after 1 sec
    
    // setTimeout(2 sec)
    //                                                                             after 2 sec

    // setTimeout(2 sec)
    //                                                                             after 3 sec
    
    

