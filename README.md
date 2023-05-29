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
 ## valider email 
 ## valider password
 
 # déclencher un evenement et d'enregistrer si les données sont vérifiées et validées
 btnRegister.addEventListener("click", (event) =>{
    event.preventDefault();
    validateInput();
});
 # onSucces()
 # onError()
