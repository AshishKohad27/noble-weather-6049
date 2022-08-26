function homecall(){
    window.location.href="login.html"
}
let arr=JSON.parse(localStorage.getItem("signup"))||[];
function submit(){

    let obj={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        pass:document.getElementById("pass").value,
    }
    console.log(obj)
    arr.push(obj);
    localStorage.setItem("signup",JSON.stringify(arr));
    window.location.href="login.html"
}