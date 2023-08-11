// synchronous
console.log("satu")
console.log("satu")
console.log("satu")

//asynchronous
console.log("asynchronous")
setTimeout(() => {
    console.log("Synchronous");
}, 2000);
console.log("asynchronous")