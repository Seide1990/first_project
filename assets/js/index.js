var form=document.querySelector("#form");
var p_name=document.querySelector("#p_name");
var p_surname=document.querySelector("#p_surname");
var p_email=document.querySelector("#p_email");
var p_password=document.querySelector("#p_password");
var p_password_t=document.querySelector("#p_password_t")

form.addEventListener("submit",function(e){
e.preventDefault();
const input=e.target;
var kod=0;

const array=['1','2','3','4','5','6','7','8','9','0'];
var array1=[]
//---------------------name
var min=3;
var max=10;
var name=(input.name.value).trim();
console.log(name)
    array1=name.split("");
    console.log(array1)
    if(name==""){
        p_name.style.color="red";
        p_name.innerHTML="zehmet olmasa xanani doldurun";
        kod=1;
    }
    else if (name.length>=min && name.length<=max){
 
        for(i of array1){
         
            if (array.includes(i)){
                console.log(i)
                kod=1;
                p_name.style.color="red";
          p_name.innerHTML="adinizi daxil etdikde reqemden istifade etmeyin";
        break
    }
        else{
             p_name.innerHTML='';
        }
        }
       
    }
    else{
        p_name.style.color="red";
        p_name.innerHTML='adinizi daxil etdikde ' +min+ ' dan kicik '+max+' reqemden az simvoldan istifade etmeyin'

    }
    //-----------------------surname
    var min=4;
    var max=15;
    var sur_name=(input.soyad.value).trim();
    console.log(sur_name)
    var array1=[]
    array1=sur_name.split("");
    if(sur_name==""){
        p_surname.style.color="red";
        p_surname.innerHTML="zehmet olmasa xanani doldurun";
        kod=1;
    }
    else if (sur_name.length>=min && sur_name.length<=max){
 
        for(i of array1){
            if (array.includes(i)){
                kod=1;
                p_surname.style.color="red";
          p_surname.innerHTML='soyadinizi daxil etdikde reqemden istifade etmeyin'
          break
        }

            else{
                 p_name.innerHTML='';
            }}}
    else{
        p_surname.style.color="red";
        p_surname.innerHTML='soyadinizi daxil etdikde ' +min+ ' dan kicik '+max+' reqemden az simvoldan istifade etmeyin'

    }
    //=====================mail
var mail=(input.mail.value).trim();
console.log(mail)
if(mail==""){
    p_email.style.color="red";
    p_email.innerHTML="zehmet olmasa xanani doldurun";
    kod=1;
}
else  if (!(mail.includes("@"))){
    p_email.style.color="red";
    p_email.innerHTML="elektron poctunuzu duzgun daxil edin";
    kod=1;
}
else{
p_email.innerHTML='';}
//------------------------------------password
var password=(input.password.value).trim();
if(password==""){
    p_password.style.color="red";
    p_password.innerHTML="zehmet olmasa xanani doldurun";
    kod=1;
}
else{
    p_password.innerHTML="";
}
//-------------------tekrar password
var tekrar_password=(input.pass_tekrar.value).trim();
if (!(password==tekrar_password)){
    p_password_t.style.color="red";
    p_password_t.innerHTML="kodu yalnis daxil etmisiniz";

kod=1;
}
else{
    p_password_t.innerHTML="";
}
if (kod==0){
    console.log('siz login oldunuz')
    localStorage.setItem("mail",input.mail.value);
    localStorage.setItem("password",input.password.value);
    window.location.href="./pages/login.html"


}
else{
    alert('icaze yoxdur')
}

})

