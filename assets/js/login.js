var form=document.querySelector("#form");
var error=document.querySelector("#error");
var p_button=document.querySelector("#p_button")
form.addEventListener("submit",function(e){
    e.preventDefault();
    const input=e.target;
    var mail=(input.mail.value).trim();
    var password=(input.password.value).trim();
    console.log(mail);
    error.innerHTML="";
    if(mail==localStorage.getItem("mail",input.mail.value) && password==localStorage.getItem("password",input.password.value)){
        error.innerHTML="";
        p_button.style.color="green";
        p_button.innerHTML="siz login oldunuz"
     
    }
    else {
        error.style.color="red";
        error.innerHTML="e-mail və ya sifrəniz yalnışdır"
    }

})
