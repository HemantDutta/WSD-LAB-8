
let app = angular.module('myApp', []);

function onLoadAnim(){ //Transitions On Load
    let login = document.getElementById('login');
    login.style.transform = "translateY(0%)";
    login.style.opacity = "100";
}

function setCookie(cname, cvalue, exdays) { //for setting cookies in the browser
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) { //fetching cookie value by name
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function login(){ //login function to set cookies of username and password! Also, store image and convert it into a document URL
    let nameField = document.getElementById('username');
    let passField = document.getElementById('password');

    setCookie(nameField.id, nameField.value, 1);
    setCookie(passField.id, passField.value, 1);
}

//Saving the url of the image as a document object
let img = document.getElementById('img'); //getting image input tag [type: file]
let imgSrc; //Global variable to store url
img.onchange = evt => {
    const [file] = img.files; //storing uploaded file in an array/object
    if (file) { //if file exists
        imgSrc = URL.createObjectURL(file); //URL returns the document object's location as string and createObjectURL creates a url pointing to the file/object passed as the parameter
    }
}

//Checking if user is logged in
function checkLogin(){
    let logStatus = getCookie('username');
    console.log(logStatus);

    let login = document.getElementById('login');
    let sideNav = document.getElementById('sideNav');
    let midForm = document.getElementById('MidForm');

    if(logStatus.length === 0){
        sideNav.classList.add('d-none'); //making sidebar and mid form invisible
        midForm.classList.add('d-none');

        login.classList.remove('d-none'); //making login form visible
        login.classList.add('d-flex');
    }
    else{
        login.classList.add('d-none');
        login.classList.remove('d-flex');

        sideNav.classList.remove('d-none');
        midForm.classList.remove('d-none');
    }
}

