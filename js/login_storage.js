let form2 = document.querySelector('#fb-form');
form2.addEventListener('submit', checkLogin);

function checkLogin(event){
    event.preventDefault();
    console.log("click");

    let email=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    let storedEmail = localStorage.getItem('R_email');
    let storedPassword = localStorage.getItem('R_password');

    if (email === storedEmail && password ===  storedPassword){
        alert("Login Successful");

        location.href = "facebook_main.html"
    } else {
        alert("Invalid email or password. Please try again.");
      }
    
}