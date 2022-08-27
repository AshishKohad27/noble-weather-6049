count=1
let show=()=>{
    console.log("working")
    let close=document.querySelector(".close")
    // let home_page=document.querySelector(".landing_page")
    count++;
    if(count%2==0){
    close.style.display="block"
    // home_page.style.display="none"
}
else{
close.style.display="none"
// home_page.style.display="block"
}
    
}
count2=1
let down=()=>{
let close=document.querySelector(".dow")
    count2++;
    if(count2%2==0){
        close.style.display="block"

}
else{
    close.style.display="none"
}

}

count3=1
let down1=()=>{
let close=document.querySelector(".down1")
    count2++;
    if(count2%2==0){
        close.style.display="block"

}
else{
    close.style.display="none"
}

}

count4=1
let down2=()=>{
let close=document.querySelector(".down2")
    count2++;
    if(count2%2==0){
        close.style.display="block"

}
else{
    close.style.display="none"
}

}