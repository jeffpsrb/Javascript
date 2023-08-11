/*
function main(param1, param2, callback) {
    console.log(param1, param2);
    callback();
}

function myCallback() {
    console.log("hello callback");
}

main(1, 2, myCallback);
*/

// function injection
function calculate(param1, param2, callback) {
    let result = param1 + param2;
    if (typeof callback === "function"){
        result = callback(param1, param2)
    }
    return result
};

let a = calculate(200, 500, function (x, y) {
    return x * y;
}); 

console.log(a);



