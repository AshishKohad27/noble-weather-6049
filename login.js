let dataarr=JSON.parse(localStorage.getItem("signup"))
// console.log(dataarr.length)



function log(){
    // console.log(dataarr)
    let loginemail=document.getElementById("checkemail").value;
    let loginpass=document.getElementById("checkpass").value;
    let flag=0;
    for(let i=0;i<dataarr.length;i++){
        if(dataarr[i].email=loginemail && dataarr[i].pass==loginpass){
             flag=1;
            break;
        }
    
    }

    if(flag===1){
    alert("Login Successful");
    }else{
    alert("Login Unsuccessful");
    }

}
// log()