



//
// Greetings troubleshooter!
// If you're reading this, message the DM that you've
// found this easter egg for 5 free perversity points!
//



function hideByClass(classValue) {
    var all = document.getElementsByClassName(classValue);
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = 'none';
    }
}

function a(str) {
    return str.split("login")[0];
}

function z() {
    return document.getElementById("userId").value;
}

function validate() {
    var userId = z();
    var password = document.getElementById("password").value;
    if (userId === "") {
        alert("Please enter a valid user ID.");
        return false;
    } else if (password === "") {
        alert("Please enter a valid password.");
        return false;
    }
    return true;
}

function hideLoading() {
    var loading = document.getElementById("loading");
    loading.style.display = "none";
}

function hideTOS() {
    var loading = document.getElementById("tos");
    loading.style.display = "none";
}

function showLoading() {
    var loading = document.getElementById("loading");
    loading.style.display = "block";
}

function ccc() {
    hideCC();
	showLoading();
    setTimeout(() => {  alert("Error, please consult with your administrator for guidance.") }, 30000);
}

function showCC() {
    var loading = document.getElementById("cc");
    loading.style.display = "block";
}

function hideCC() {
    var loading = document.getElementById("cc");
    loading.style.display = "none";
}

function pop() {
    alert(atob("U3lzdGVtIGhhcyBkZXRlY3RlZCB0aGF0IHlvdSBkaWQgbm90IHJlYWQgdGhlIHRlcm1zIG9mIHNlcnZpY2UuIFRoZSBsb2dpbiBwcm9jZXNzIHdpbGwgY29udGludWUsIGJ1dCB5b3VyIG1hbmFnZXIgd2lsbCBiZSBub3RpZmllZC4="));
    hideLoading();
    showCC();
}

function showTOS() {
    var loading = document.getElementById("tos");
    loading.style.display = "block";
}

function c() {
    return a(window.location.href).concat(b());
}

function tosAgree() {
    hideTOS();
    showLoading();
    setTimeout(() => {  pop() }, getRndInteger(4000, 10000));
}

function e() {
    hideByClass("lol");
    showLoading();
    setTimeout(() => {  window.location.replace(c()) }, getRndInteger(4000, 10000));
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function d() {
    return btoa(z()) == "Y2QwMTI5Mzc=";
}

function challenge() {
    hideLoading();
    showTOS();
}

function login(){
    if (!validate()) {
        return;
    } else if (d()) {
        e();
    } else {
        hideByClass("lol");
        showLoading();
        setTimeout(() => {  challenge() }, getRndInteger(2000, 8000));
    }
}

function b() {
    return atob("dHJvdWJsZXNob290Lmh0bWw=");
}
