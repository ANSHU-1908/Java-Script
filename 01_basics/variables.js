const accountId = 14453   // for constant const keyword
let accountEmail = "anshu123@gmail.com" // for variable let keyword
var accountPass = "12345"   // for variable var keyword
accountCity = " jaipur "
// accountState = "bihar"
let accountState ; // output as  undefined when we dont assign vlaue of variable in js it takes it as undefined 
// {}--> these are called scope 

//  const accountId = 5664
 accountEmail = " raj234@gmail.com "
 accountPass = " 6548 "
accountCity = "kolkata" 

// console.log(want to print as a output)  --> only  for one at a time 

// console.table([row1 , row2 , row3])  --> many at a time 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail , accountPass , accountCity , accountId , accountState])
