let form=document.getElementById("form-signup");
let firstname=document.getElementById("first_name");
let lastname=document.getElementById("last_name");
let email=document.getElementById("email");
let password=document.getElementById("password");
let errorMsg=document.getElementsByClassName("error");

form.addEventListener("submit",function(event){
    event.preventDefault();
    valid(firstname,0,'First Name cannot be Blank');
    valid(lastname,1,'Last Name cannot be Blank');
    valid(email,2,'Mobile Number or Email cannot be Blank');
    valid(password,3,'Password cannot be Blank');

})

let valid = function(val,id,message){

    if (val.value.trim()===""){
        errorMsg[id].innerHTML=message;
        val.style.border ="2px solid red";
    }

    else{
        errorMsg[id].innerHTML= " ";
        val.style.border="2px solid green";
    }
}

