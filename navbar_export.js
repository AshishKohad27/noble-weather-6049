function navbar(){

    
  return `<div class="dropdown">
      
  
        <nav>
          <img
            class="logo_nav"
            src="https://i.ibb.co/0hGxYYS/Mentimeter-logo-removebg-preview.png"
          />
  
          <ul class="nav_mid nav_ul">
            <li class="nav_li">
              <a href="#"
                >Features <i class="fa-solid fa-angle-down down"></i>
              </a>
              <ul >
              <li><a href="f_overview.html">Overview</a></li>
              <li><a href="feature_livepoll.html">Live Polling</a></li>
              <li><a href="#">Word Cloud</a></li>
              <li><a href="#">Quiz</a></li>
              <li><a href="#">Q&A</a></li>
              <li><a href="#">Survey</a></li>
              <li><a href="presentation.html">Presentation</a></li>
              </ul>
            </li>
            <li>
              <a href="#"
                >Tutorials <i class="fa-solid fa-angle-down down"></i>
              </a>
              <ul>
              <li><a href="Sol_Overview.html">Overview</a></li>
              <li><a href="Sol_Speaker.html">Speakers</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Private events</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Resources  <i class="fa-solid fa-angle-down down"></i> </a>
              <ul>
              <li><a href="#">How to</a></li>
              <li><a href="#">MentiAcademy</a></li>
              <li><a href="Res_Template.html">Templates</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="page1.html">Intergrations</a></li>
              <li><a href="#">Help Center</a></li>
              </ul>
            </li>
            <li><a href="pricing.html">Pricing</a></li>
             <li><a href="#">Enterprise</a></li>
          </ul>
  
          <ul class="nav_mid">
          <li><a href="login.html">Login</a></li>
          <li>
            <a href="signup.html"><button class="sign_up_btn">Sign up</button></a>
          </li>
          </ul>
  
          <ul class="menu" onclick="show()">
            <i class="fa-solid fa-bars "></i>
          </ul>
        </nav>
        <div class="close">
          <ul class="nav_ul">
            <li>
              <a  href="#" class="show" onclick="down()">Features <i class="fa-solid fa-angle-down down"></i> </a>
              <ul class="dow" >
              <li><a href="login.html">Overview</a></li>
              <li><a href="feature_livepoll.html">Live Polling</a></li>
              <li><a href="#">Word Cloud</a></li>
              <li><a href="#">Quiz</a></li>
              <li><a href="#">Q&A</a></li>
              <li><a href="#">Survey</a></li>
              <li><a href="presentation.html">Presentation</a></li>
              </ul>
            </li>
            <li>
              <a href="#" onclick="down1()">Tutorials <i class="fa-solid fa-angle-down down"></i> </a>
              <ul class="down1" >
              <li><a href="Sol_Overview.html">Overview</a></li>
              <li><a href="Sol_Speaker.html">Speakers</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Private events</a></li>
              </ul>
            </li>
            <li>
              <a href="#" onclick="down2()">Resources <i class="fa-solid fa-angle-down down"></i> </a>
              <ul class="down2" >
              <li><a href="#">How to</a></li>
              <li><a href="#">MentiAcademy</a></li>
              <li><a href="Res_Template.html">Templates</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="page1.html">Intergrations</a></li>
              <li><a href="#">Help Center</a></li>
              </ul>
            </li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
    
          <ul>
          <li><a href="login.html">Login</a></li>
          <li>
            <a href="signup.html"><button class="sign_up_btn">Sign up</button></a>
          </li>
          </ul>
    
     
         </div>
       </div>`;
   
   }
   
   export default navbar;
   
   // style links
   
   //  <link rel="stylesheet" href="nav.css" />
   // <link rel="stylesheet" href="promo.css" />
   // <link
   //   rel="stylesheet"
   //   href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
   // />
   // <link
   //   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
   //   rel="stylesheet"
   // /> 
   
   // functionality of navbar
   
   //  <script src="nav.js"></script>
   
   //  navbar import code------------>
   
   // <script type="module">
  
    
   //   import navbar from "/navbar_export.js";
   
   //   let container = document.querySelector("#navbar_container");
   //   container.innerHTML = navbar();
   // </script>
   