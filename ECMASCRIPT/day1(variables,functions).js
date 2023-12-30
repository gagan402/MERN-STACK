// console.log("Hello");


//How to declare variables?
/*
var x=10;//scope:function level
let y=20;//scope:block level
const z=30;//scope:block level (value of const variable cannot be reassigned)
console.log(x+" "+y+" "+z);
*/

// function fun()
// {
//     var x=10;
//     {
//         console.log(x+" "+y);  //10 undefined
//         var y=20;
//         console.log(x+" "+y+"*"); //10 20*
//     }
// }
// fun();




//if we use let instead of var then code will give error ,reference error:cannot access y before initialization
// function fun()
// {
//     var x=10;
//     {
//         console.log(x+" "+y);  
//         let y=20;
//         console.log(x+" "+y+"*");
//     }
// }
// fun();






/*/function fun1()
{
    var x=10;
    {
        let z=50;
        var y=20;
        const c=45;
        console.log(x+" "+y+" "+z);//10 20 50
    }
    
    console.log(x+" "+y+" "+z+"**");//z will give error as let is having only block level scope
    console.log(c);//c will give error as const is having only block level scope
}

fun1();

*/






/*
var gl=10;
function fun2()
{
    var gl;//local variable priority is higher than global variable

    console.log(gl);
    {
         gl=20;
        console.log(gl);
    }
}

fun2();
*/






// each function in js  is an object
/*
function   fx(){
    console.log("****");
}
console.log(fx);
fx.roll=101;
console.log(fx.roll);
*/






//IIFE : immediately invoked function Expression
//diff between == and ===
/*
(function ggn()
{
    // if(uid==="admin")
    // {
    //     console.log();
    // }

    var x=4;
    if(x==="4")
    {
        console.log("same");
    }
    else{
        console.log("not same");
    }
})();

 */



//passing functions
/*

function dosignup(uid,pwd)
{
     console.log(uid+" signed up with pwd "+pwd);
};





function dologin(uid,pwd)
{
    if(uid=="amn" && pwd=="123")
    {
        console.log("logged");
    }
    else{
        console.log("not logged");
    }
    
};
// dosignup("amn","123");
// dologin("amn","123");


function doSL(funS,funL,u,p)
{
    funS(u,p);
    funL(u,p);
}

doSL(dosignup,dologin,"amn","123");//passing functions as arguments

*/






//returning  functions

// function getFx()
// {          //anonymous function :unamed function
//     return(
//         function(){
//             var x=10;
//             console.log("$"+x);
//         });  
// }
// var ans=getFx();
// ans();  




// function logging(log)
// {
//    if(log==true)
//    {
//     return(
//         function()
//         {
//             console.log("dashboard");
//         }
//     )
//    }
//    else{
//     return(
//         function()
//         {
//             console.log("login page");
//         }
//     )
//    }
// };


// var  ans=logging(true);
// ans();








//method 1
function fun1()
{
    console.log("fun1");
}
fun1();

//method 2
const fun2=function()
{
    console.log("fun2");
}
fun2();

//arrow functions
//method 3
//function with single statement  with  block
const getSquare=(r)=>{
    return r*r;
}
console.log(getSquare(10));

//method 4
//function with single statement  without return and block 
const fun3=(r,t)=>r*r*t;//return is hidden
console.log(fun3(8,0));


//method 5
//here we can pass only single argument and it is invalid for more than one argument
const fun4=r=>r*r;
console.log(fun4(3));



