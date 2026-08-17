// const tindrusedr = new Object() ; // singelton object 

const tinderuser = {} ;   // not a singelton object 

// console.log(tinderuser); 

tinderuser.id   = "123abc"
tinderuser.name = "Anshu" 
tinderuser.email = "ghkndfo.com"
tinderuser.isloggedin = false


// console.log(tinderuser); 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1 : "a" , 2 : "b"};
const obj2 = {3 : "a" , 4 : "b"};
const obj4 = {5 : "a" , 6 : "b"};


const obj3 = {...obj1 ,...obj2 , ...obj4} 

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// console.log(obj3);


// console.log(tinderuser);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn'));
// console.log(tinderuser.hasOwnProperty('isloggedIin'));


const course = {
    coursename : "webdev" ,
    price : " 857 " ,
    courseteacher : " anshu " 
}

console.log(course.courseteacher);  

const {courseteacher} = course  ;

console.log(courseteacher);


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
