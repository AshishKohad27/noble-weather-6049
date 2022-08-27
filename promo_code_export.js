
function promo_code(){

    return `
    <div class="promo">
    <div class="promo_mid">
      <p>What to join a presentaion?</p>
      <input
        type="text"
        class="input"
        placeholder="Enter code here"
        oninput="join()"
      />
      <button class="join">Join</button>
    </div>
    <div>
      <span class="material-symbols-outlined" onclick="top_close()">
        close
      </span>
    </div>
</div>
    `
}

export default promo_code;

// style links


// <link rel="stylesheet" href="nav.css" />
// <link
//   rel="stylesheet"
//   href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
// />
// <link
//   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
//   rel="stylesheet"
// /> 


// functionality 

{/* <script src="nav.js"></script>
<script src="promo.js"></script> */}


//  promo_code import 
 
// <script type="module">

    
//   import promo_code from "/promo_code_export.js";
//   console.log("navbar:", promo_code);

//   let promo = document.querySelector("#promo_code");
//   promo.innerHTML = promo_code();
// </script>