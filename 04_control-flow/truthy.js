const userEmail = "Anshu.com.ai" 
const userEmail1 = "Anshu.com.ai.google" 
const userEmail2 = []  

if (userEmail) {
    console.log(`"Got user email"  ${userEmail2}`);
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail2.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {  // here Object.keys(emptyObj) return an array 
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined  --> this is used to deal with fallback or error generatable output by code

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")