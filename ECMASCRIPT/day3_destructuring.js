//destructuring is done of array and objects
//destructuring is not keyword it is only behaviour
//JavaScript destructuring is a feature that allows you to extract values from arrays and objects in asingle assignment.


//destructuring array
/*
var ary = ["real", "java"];
var cpy = [...ary]; //... is used to copy the content of an array to another array
var c = ary; //here is only refernce is assigned
console.log(cpy);

var  ary2=["www.",...ary,"online.com"];
//above code will proccessed as
var ary3=["www."].concat(ary,["online.com"]);
console.log(ary2);
console.log(ary3); 

*/




//destructuring object

/*
const config={
    server:"localhost",
    doConnect:function(){
        console.log("Connecting to server "+this.server);
    }
}

// config.doConnect();
// console.log(config.server);

const {server,doConnect}=config;
console.log(server);
doConnect();

//renaming object properties
const {server:myServer,doConnect:mydoConnect}=config;
console.log(myServer);
mydoConnect();




//copy the object
var  cpyObj={...config};
console.log(cpyObj);
cpyObj.doConnect();


*/

/*
function getAry()
{
    return [10,20];
}

// var ary3=getAry();
// console.log(ary3[0]+" "+ary3[1]);

var [x,y]=getAry();
console.log(x+" "+y);



*/


/*
function getObject()
{
    return {
        price:100,
        qty:5,
        doBilling:function()
        {
            return price*qty;
        }
    }
}


var {price,qty,doBilling}=getObject();

console.log(price+" "+qty);
console.log(doBilling());

*/


//will be used in props
/*
const obj={
    width:100,
    height:200,
    src:"itsme.jpg"
}
                   //destructuring in formal arguments
function showProps({width,src})
{
    console.log(width+" "+src);
}
showProps(obj);

*/ 


function getAryofObjects()
{
    return (
        [
            {uid:"admin",pwd:"passcode"},
            {name:"aman",add:"bathinda"}
        ]
    )
}
//here user1 is refering to first object of arraty and user2 is refering to second object
const [user1,user2]=getAryofObjects();
console.log(user2.name+"  "+user1.pwd);
 
const [,user]=getAryofObjects();//if we need only second object










//this is not destructuring this is var args-n arguments
//here all variables passed in partms are converted in arry named ggn
// function partms(...ggn) {
//   let all;
//   let gh = "";
//   for (let i = 0; i < ggn.length; i++) {
//     all = ggn.concat();
//     gh += ggn[i] + " ";
//     console.log(ggn[i]);
//   }
//   console.log(all);
//   console.log(gh);
// }

// partms("aman", "raman", "Chaman");
