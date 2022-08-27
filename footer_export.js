

function footer(){

   return  `
    <div class="footer_outer">
    <div class="footer_inner">
      <footer>
        <div>
          <img
            src="https://i.ibb.co/dB7Qf3g/Mentimeter-Branding-Logo-2020-RGB-10-v2-removebg-preview.png"
            alt=""
          />
        </div>
        <div>
          <ul class="footer_mid">
            <li>
              <a href="#" class="footer_mid_header">Features </a>
              <hr />
              <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Live Polling</a></li>
                <li><a href="#">Word Cloud</a></li>
                <li><a href="#">Quiz</a></li>
                <li><a href="#">Q&A</a></li>
                <li><a href="#">Survey</a></li>
                <li><a href="#">Presentation</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="footer_mid_header">Resources </a>
              <hr />
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">How to</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Templates</a></li>
                <li><a href="#">Academy</a></li>
                <li><a href="#">Webinars</a></li>
                <li><a href="#">Comparison</a></li>
                <li><a href="#">Stories</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="footer_mid_header">Details </a>
              <hr />
              <ul>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Policies</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Requirements</a></li>
              </ul>
            </li>
            <li>
              <a href="#" class="footer_mid_header">About us </a>
              <hr />
              <ul>
                <li><a href="#">Press info</a></li>
                <li><a href="#">The Team</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Culture</a></li>
                <li><a href="#">Benefits</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Climate</a></li>
                <li><a href="#">Investors</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <img
              src="https://i.ibb.co/N1PPDNn/26-08-2022-12-34-15-REC.png"
              alt=""
            />
          </div>
          <div>
            <div>
              <iconify-icon icon="ant-design:facebook-filled"></iconify-icon>
            </div>
            <div>
              <iconify-icon
                icon="akar-icons:linkedin-box-fill"
              ></iconify-icon>
            </div>
            <div>
              <iconify-icon icon="akar-icons:twitter-fill"></iconify-icon>
            </div>
            <div>
              <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div class="footer_end_chose_lang">
        <div><a href="">Choose your language:</a></div>
        <div><a href="">English</a></div>
        <div><a href="">Portuguese (Brazil) </a></div>
        <div><a href="">Spanish</a></div>
      </div>
    </div>
  </div>
    `
}

export default footer()

// <link rel="stylesheet" href="footer.css">
// <script src="https://code.iconify.design/iconify-icon/1.0.0-beta.3/iconify-icon.min.js"></script>

// import part
  
{/* <script type="module">
 
 import footer from "/footer_export.js";
 console.log("foooter",footer)

 let foot = document.querySelector("#footer_container");
 foot.innerHTML = footer;
</script> */}