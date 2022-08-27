function dropDown(){
    return `<div class="navigation">
    <div class="userBox">
        <div class="imgBx">
            <img src="./image/ashish.JPG" alt="">
        </div>
        <p class="username">Ashish Kohad</p>
    </div>
    <div class="menuToggle"></div>
    <ul class="menu">
        <li> <a href="#">
                <ion-icon name="person-outline"></ion-icon>My Profile
            </a> </li>
        <li> <a href="#">
                <ion-icon name="chatbubble-outline"></ion-icon>Message
            </a> </li>
        <li> <a href="#">
                <ion-icon name="notifications-outline"></ion-icon>Notification
            </a> </li>
        <li> <a href="#">
                <ion-icon name="settings-outline"></ion-icon>Setting
            </a> </li>
        <li> <a href="#">
                <ion-icon name="help-outline"></ion-icon>Help & Support
            </a> </li>
        <li> <a href="#" id="logoutYT">
                <ion-icon name="log-out-outline"></ion-icon>Logout
            </a> </li>
    </ul>
</div>`
}

export default dropDown