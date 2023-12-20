/*console.log("Hello");
var x=10;//scope:function level
let y=20;//scope:block level
const z=30;
console.log(x+" "+y+" "+z);
*/


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
//each function in js is an object
/*
function   fx(){
    console.log("****");
}
console.log(fx);
fx.roll=101;
console.log(fx.roll);
*/


