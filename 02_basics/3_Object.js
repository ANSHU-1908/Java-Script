// singleton 
// literals se banega singleton nahi banta hai 
// constructor se banega singelton banega 
// Object.create // yahi hai constructor ke through jo banta hai 

const mysym = Symbol("key1") ;

const js_user = {   
    name : 'ANshu' ,
    "full name ":"Anshu Mishra" ,
    age : 18 ,
    [mysym] : "mykey1" ,
    email : "anshu.bcom" ,
    location : "bihar" ,
    logged : false ,
    lastlogindays :  ["monday" , "sunday"]
} ;

// console.log(js_user.email); 
// console.log(js_user["email"]);


// console.log(mysym); 
// console.log(typeof  mysym); 

// console.log(js_user[mysym]);

// console.log(typeof js_user[mysym]);

// console.log(js_user) ;

js_user.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  --> use to freeze 
js_user.email = "hitesh@microsoft.com"
// console.log(JsUser);

js_user.greeting = function(){
    console.log("Hello JS user");
}
js_user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(js_user.greeting());
console.log(js_user.greetingTwo());


console.log(js_user) ;















