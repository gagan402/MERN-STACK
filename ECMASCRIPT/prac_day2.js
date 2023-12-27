//IIFE
// ((n)=>{
//     console.log("hello "+n);
// })("gagan");


//===========================
// function doFun()
// {
//     var i;
//     for(i=1;i<=4;i++)
//     {
//         (function()
//         {
//             console.log(i);
//         })();
//     }
// }


// doFun();


// function doFun()
// {
//     var i;
//     for(i=1;i<=4;i++)
//     {
//         (function()
//         {
//             setTimeout(()=>{
//                 console.log(i);
//             },1000*i);
//         })();
//     }
// }


// doFun();



// function doFun()
// {
//     var i;
//     for(i=1;i<=4;i++)
//     {
//         let j=i;
//         (function()
//         {
//             setTimeout(()=>{
//                 console.log(j);
//             },1000*j);
//         })();
//     }
// }


// doFun();



// function doFun()
// {
//     var i;
//     for(i=1;i<=4;i++)
//     {
        
//         (function(j)
//         {
//             setTimeout(()=>{
//                 console.log(j);
//             },1000*j);
//         })(i);
//     }
// }


// doFun();




function doFun()
{
    
    for(let i=1;i<=4;i++)
    {
        
        (function()
        {
            setTimeout(()=>{
                console.log(i);
            },1000*i);
        })();
    }

    // console.log(i);//gives error bcz let have block scope

}


doFun();