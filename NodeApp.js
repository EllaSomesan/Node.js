console.log('Hello from Node.js');
const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello from Node.js');
const name = 'Max';
let age = 34;
const  hashobbies = true;
function sumarizeUser(userName, userAge,userHashobbies){
return 'Name is ' + userName, 
'Age is' + userAge, 
'and user has hobbies' + userHashobbies;
};

const add = (a,b)=>{
return a+b;
};
console.log(add(1,2));


console.log(sumarizeUser(age,name,hashobbies));