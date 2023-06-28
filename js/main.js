let form=document.getElementById("fb-form");
let username=document.getElementById("username");
let password=document.getElementById("password");
let errorMsg=document.getElementsByClassName("error");

form.addEventListener("submit",function(event){
    event.preventDefault();
    valid(username,0,'Email or Mobile Number cannot be Blank');
    valid(password,1,'Password cannot be Blank');
})

let valid = function(val,id,message){

    if(val.value.trim()=== ""){
        errorMsg[id].innerHTML=message;
        val.style.border="2px solid red";
    }

    else{
        errorMsg[id].innerHTML= " ";
        val.style.border="2px solid green";
    }
}
