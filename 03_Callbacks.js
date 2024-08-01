console.log("one");

function hello(){
console.log("Hiiiii");
}
setTimeout(hello,3000);
console.log("two");
setTimeout( ()=>console.log("hello"), 2000);

console.log("three");
console.log("four");


function sum(a,b){
  console.log(a + b);
}

function calTime(a,b, sumTime){
  sumTime(a,b);

}
calTime(1,2,sum);



//Asynchronous Operations:
function fetchData(callback){
  setTimeout(() =>{
    callback("Data Fetched")
  }, 3000);
}
fetchData((data) =>{
  console.log(data);
})


//Event Handling:
document.getElementById("myButton").addEventListener("click", () => {
  console.log("Button clicked!");
})

//Customize Behavior
function processData(data, callback){
  const result = data.toUpperCase();
  callback(result);
}

processData("hello" , (processedDaata) =>{
  console.log(processedDaata);
})

//Decoupling

//before Coupling
// function loginUser(username, password){
//   if(username === "user" && password === "pass"){
//     console.log("welcome, " + username + "!");
//   } else {
//     console.log("Invalid credentials.");
// }
// }
// loginUser("user", "pass");
// loginUser("aqsa" , 99013092);

//After Coupling
function authenticate(username, password){
  return username === "user" && password === "pass";
}

function displayMsg(username){
  console.log(`Welcome, ${username} !`);
}

function loginUser(username, password){
  if(authenticate(username, password)){
    displayMsg(username);
  }else{
    console.log("Invalid credentials");
  }
}

loginUser("user", "pass");
loginUser("aqsa" , 99013092);


function step1 (callback){
  console.log("step1");
  callback();


}
function step2(){
  console.log("Step2");
}

step1(step2);