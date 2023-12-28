// setInterval(fx,delay,parameter);
//delay is in millliseconds



// const fx1=()=>{
//     setInterval(function(){
//         console.log("hello");
//     },1000);
// };
// fx1();


// const fx2=()=>{
//     setInterval(()=>{console.log("hi")},1000);
// }
// fx2();


// const fx3=()=>{
//     setInterval(()=>console.log("hy"),1000);
// }

// fx3();


// const fx4=()=>{
//     setInterval(todo,1000,"real java","ggn");
//     function todo(msg,n)
//     {
//         console.log(msg);
//         console.log(n);
//     }
// }
// fx4();


function printTimer()
{
    var cdt=new Date();
    console.log(cdt.getHours()+":"+cdt.getMinutes()+":"+cdt.getSeconds());
}

// printTimer();
const startTimer=()=>{
    const sref=setInterval(printTimer,1000);
    // arrow fx must be declared before calling but its not same in case of normal fx
    const stopTimer=(r)=>{
        clearInterval(r);

    };
    setTimeout(stopTimer,6000,sref); 
    

};



// function stopTimer(ref)
// {
//     clearInterval(ref);
// }
startTimer();
