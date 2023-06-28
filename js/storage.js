let form1=document.querySelector('#form-signup');
form1.addEventListener('submit', storeData);
function storeData(event){
    event.preventDefault();

    let fName=document.getElementById("first_name").value;
    let lName=document.getElementById("last_name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    localStorage.setItem('R_first_name', fName);
    localStorage.setItem('R_last_name', lName);
    localStorage.setItem('R_email', email);
    localStorage.setItem('R_password', password);
    console.log(form1);
    alert("Register Successfully");
    location.href='index.html'
}

