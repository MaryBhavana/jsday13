console.log("working...")

// let element1 = document.createElement("div");
// element1.className = "new";
// element1.innerHTML = "<b>Hello everyone</b>";
// console.log(element1);
// document.querySelector("div.item1").appendChild(element1)

// let element2 = document.createElement("img");
// element2.className = "image";
// element2.setAttribute("src","./boat.jpg");
// console.log(element2);
// document.querySelector("div#item2").appendChild(element2);
a();

function a(){
    console.log("I am fn A");
}
//function body is called function statement/definition.
//Fn statement supports the hoisting ,i.e. claiing the function even before declaring the function



var b = function(){
    console.log("I am fn B");
}
//Since here this fn is anonymous, it wont support hoisting.
//fn expression dont support hoisting
console.log(b);
b();

//A function expression is a unnamed fn assigned to the variable, The variable receives the function defn,
//which in turn can call the function by calling the variable name. {a();}

{
    let d = function(){
        console.log("this is fn abc")
    }
    d();//gives the output
}
// d();//will throw not defined error as not in the scope
//the fn can only be called inside the scope and not outside the scope.


//arrow functions//Introduced in ES6(2015)

let f = () => {
    console.log("I am fn F");
}
f();


//First Class Functions - The functions can be passed as values(as arguments) into another functions or can be returned from another functions as values. This unique feature of functions makes them call as first classs functions/ First class citizens.

//Higher order functions(HOF) - the functions which accepts the FCF's or return them are
//called as Higher order functions

let g = function(param){//HOF
    console.log("I am fn G");
    console.log(param);
    param();
}

function h(){//FCF
    console.log("I am fn h");
}
g(h);//h is a function passed as an argument

let i = function(){//HOF
    return function j(){//FCF
        console.log("I am fn J");
    }
}
let returnVal = i();
console.log(returnVal);
//console.log(i());

setTimeout(() => {
    console.log("callback function");
}, 4000);

const sayHi = (nameOfFriend) => {//Callback function
    console.log("Hello",nameOfFriend);
}

const greeting = (friend, callBackFUnction) => {
    callBackFUnction(friend);//sayHi(friend);
}

greeting("Bala",sayHi);

//function sayHi(arg3){//arg3=Bala
    // log("hello",arg3)//hello Bala
// }

//function greeting(arg1, arg2){//HOF
    // arg1 = "Bala",
    // arg2 = sayHi,
    // arg2(Bala); => sayHi(Bala);//calling a function
// }

// greeting("Bala",sayHi)




