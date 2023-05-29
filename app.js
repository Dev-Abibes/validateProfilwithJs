const userName = document.getElementById('txtUserName');
const email = document.getElementById('txtEmail');
const pwd = document.getElementById('txtPwd');
const conPwd = document.getElementById('txtConPwd');
const form = document.querySelector("form");
const btnRegister = document.getElementById("register");
// ______________________________________________________________________________________________
function validateInput(){
    // check username is empty II VERIFIER SI IL EST VIDE
    if(userName.value.trim() == ""){
        onError(userName,"vous devez remplir le champs conard");
    }else{
        onSuccess(userName, "bien joué connard");
    }
    if(email.value.trim() == ""){
        onError(email, "le champs est vide")
        
    }else if(!isValidEmail(email.value.trim())){
        onError(email, "email pas valid , vous devez saisir aaaa@hfh.fr");
    }else{
        onSuccess(email, "bravo connard email valid enfin");
    }
    /// Password
    if(pwd.value.trim() === ""){
        onError(pwd, "votre champs vide");
    } else if(!isValidPassword(pwd.value)){
        onError(pwd, "your password not conform");
    }else{
        onSuccess(pwd, "bravo connard , mot de pass valid");
    }
    // confirm Password 
    if(conPwd.value.trim() ===""){
        onError(conPwd, "le champ est vide, vosu devez confirmer le mot de pass")
    } else if(conPwd.Value.trim() != pwd.value.trim()){
        onError(conPwd, "le mot de pass esrt diffrent");
    }else{
        onSuccess(conPwd, "Bravo");
    }
}
// ______________________________________________________________________________________________
btnRegister.addEventListener("click", (event) =>{
    event.preventDefault();
    validateInput();
});
// ______________________________________________________________________________________________
function onSuccess(input, message){
    //
    let parent = input.parentElement;
    let messageEl = parent.querySelector("small");
    messageEl.style.visibility = "visible";
    //messageEl.style.color = "green";
    parent.classList.add("success");
    parent.classList.remove("error");
    messageEl.innerText = message;
}
// ______________________________________________________________________________________________
function onError(input, message){
    //
    let parent = input.parentElement;
    let messageEl = parent.querySelector("small");
    messageEl.style.visibility = "visible";
    parent.classList.add("error");
    parent.classList.remove("success")
    messageEl.innerText = message;
}
// ______________________________________________________________________________________________
function isValidEmail(mailValue){
    var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexMail.test(String(mailValue).toLowerCase());
}
// ______________________________________________________________________________________________
function isValidPassword(pwd){
    //la condition de regex doit etre validé 
    var regexPwd = /^[A-Za-z]\w{7,14}$/;
    return regexPwd.test(pwd);
}






