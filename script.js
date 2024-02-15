let signUpEmail = document.querySelector("#signUpEmail");
let signUpPassword = document.querySelector("#signUpPassword");
let signInEmail = document.querySelector("#signInEmail");
let signInPassword = document.querySelector("#signInPassword");

function signUp(){
    localStorage.setItem("email",signUpEmail.value);
    localStorage.setItem("password",signUpPassword.value);
    if(signUpEmail.value !== "" && signUpPassword.value !== ""){
    alert("sign Up successful")
}
}

function anchor(){
    if(signUpEmail.value !== "" && signUpPassword.value !== ""){
        location.href = "./signIn.html"
    }
}


function signIn(){

    if(localStorage.getItem("email") == signInEmail.value && localStorage.getItem("password") == signInPassword.value){
        alert("login successful")
    }else{
        alert("Email or Password not Found\nPlease SignUp if you heaven't yet")
    }
    }


function welcome(){
    if(localStorage.getItem("email") == signInEmail.value && localStorage.getItem("password") == signInPassword.value){
        location.href = "./Todo.html"
    }

}

function signUpbtn(){
    location.href="./index.html";
}
