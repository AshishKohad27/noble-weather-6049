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
             localStorage.setItem("logindata",JSON.stringify(loginemail));
            break;
        }
    
    }

    if(flag===1){
    alert("Login Successful");
    window.location.href = "index.html"
    }else{
    alert("Login Unsuccessful");
    }

}
// log()