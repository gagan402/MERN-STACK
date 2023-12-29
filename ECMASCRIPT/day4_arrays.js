// var a=[2,4,3];
// console.log(a);
// var b=Array(7,8,9,5);//Array is in-built class,A should be capital
// console.log(b);




/*
let n=5;
//if array have only one argument ,it will considered as length
var c=Array(n);//declared an array of n length
console.log(c.length);
console.log(c);
c.fill(5);//all elements will be 5
console.log(c);
c.fill(30,2);//will fill 30 from index 2nd
console.log(c);
c.fill(45,2,4);//will fill 45 from index 2nd to <4
console.log(c);
*/


/*
var ls=Array("bce","bti","India","bce");
console.log(ls);

let indx=ls.indexOf("bce");//return only index of first occurrence
console.log(indx);

let pos=ls.findIndex((str)=>str=="bti");//return only index of first occurrence
console.log(pos);

let post=ls.findLastIndex((str)=>str=="bce");//return only index of first occurrence
console.log(post);

let position=ls.findLastIndex(fun);//return only index of first occurrence
function fun(str)
{
    return str=="bce";
}
console.log("**"+position);



//only traverse the arrat
//for each loop
ls.forEach((str)=>{
    console.log(str);
});


*/
/*
var sal=Array(100,200,300,400,500);
//it traverse the array and perform some calculations on it  and return new resultant array
var tax=Array.from(sal,(s)=>{
    if(s<300)
    {
        return (s*10)/100;
    }
    else{
        return (s*20)/100;
    }
})
console.log(tax);
console.log(sal);
*/



//======================================
//swapping two variables using destructuring
// var a=10,b=20;
// console.log(a+" "+b);
// var [b,a]=[a,b];
// console.log(a+" "+b);

//================================
//using filter() Array
//we use filter when we need some data from whole data
//it return new resultant arrray

var gj=[
    {name:"aman",branch:"cse",per:90},
    {name:"ram",branch:"ece",per:60},
    {name:"amit",branch:"cse",per:70},
    {name:"raman",branch:"mech",per:99},
    {name:"modi",branch:"civil",per:98},
    {name:"gabbar",branch:"cse",per:90}
];

/*
var cseData=gj.filter((obj)=>obj.branch=="cse" && obj.per>="90");
console.log(cseData);

//it only return object it do not return any particular properties 
var d=gj.filter(
    (ggn)=>
    {
        if(ggn.branch=="cse")
        {
            // return ggn.name;//it will return whole object
            return ggn;
        }
    }
);

console.log(d);



*/
//=================================
//using map() array
//it return something at every iteration
//use when u want to process every data
/* 
var mm=gj.map((ggn)=>ggn.branch=="cse");
 console.log(mm);

 var mb=gj.map((ggn)=>
 {
    //if lagana ha i toh filter me jao
    if(ggn.branch=="cse")
    {
        return ggn;
    }
 });

 console.log(mb);

 var ms=gj.map((ggn)=>{
    return {a:ggn.name,b:ggn.branch};  //returning customized objects
 })
console.log(ms);

var mt=gj.map((ggn)=>{
    ggn.per=ggn.per+20;//it will modify original data of  objects before return 
    return ggn;
 })
console.log(mt);

console.log(gj);



*/




///=======================================
//sort array
//it sort the original array also

var ss=gj.sort((o1,o2)=>
{
    if(o1.branch>o2.branch)
    {
        return 1;
    }
    else{
        return -1;
    }
})

console.log(ss);
console.log(gj);