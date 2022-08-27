let top_close = () => {
    document.querySelector(".promo").style.display = "none";
    console.log("wow")
  };


let join = () => {
    let input = document.querySelector(".input").value;
    let join = document.querySelector(".join");
    if (input.length < 4) {
      join.style.backgroundColor = "#a378cd";
    }
    else if(input.length>= 4) {
      join.style.backgroundColor = "#196cff";
    }
  };

  let apply=()=>{

    let input = document.querySelector(".input").value;
    
    if(input==="santosh40" ){
      alert("Yor Are Eligible For 40% OFF Please Login")
    }
   
    else if(input==""){
      alert("Please Enter Promo Code")
    }
  }