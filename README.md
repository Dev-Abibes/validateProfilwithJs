# validateProfilwithJs
Validation des input de création de profil sur javascript

# function validateInput()
##  valider username
```js
if(userName.value.trim() == ""){
        onError(userName,"vous devez remplir le champs conard");
    }else{
        onSuccess(userName, "bien joué connard");
    }
  ```
 ### valider email 
 ```function isValidEmail(mailValue){
    var regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexMail.test(String(mailValue).toLowerCase());
}
 ```
 ### valider password
 ```
 function isValidPassword(pwd){
    //la condition de regex doit etre validé 
    var regexPwd = /^[A-Za-z]\w{7,14}$/;
    return regexPwd.test(pwd);
}
 ```
 # déclencher un evenement et d'enregistrer si les données sont vérifiées et validées
 btnRegister.addEventListener("click", (event) =>{
    event.preventDefault();
    validateInput();
});
### onSucces()
```
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
 ```
### onError()
 ```
 function onError(input, message){
    //
    let parent = input.parentElement;
    let messageEl = parent.querySelector("small");
    messageEl.style.visibility = "visible";
    parent.classList.add("error");
    parent.classList.remove("success")
    messageEl.innerText = message;
}
```
