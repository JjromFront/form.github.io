let viewPasswordButton = document.querySelector(".eye-icon");
let textMod = document.querySelector(".verification-text");
let userInput = document.querySelector("#usernameInput");
let passwordInput = document.querySelector("#passwordInput");
let submitButton = document.querySelector("#submitBtn");
let loginBoxContent = document.querySelector(".login-box-content-all");
let okBtn = document.querySelector(".okBtn")
// View password
function viewPassword() {
    viewPasswordButton.addEventListener("click", () => {
        if (viewPasswordButton.classList.contains("fa-eye-slash")) {
            viewPasswordButton.classList.remove("fa-sharp");
            viewPasswordButton.classList.remove("fa-eye-slash");
            viewPasswordButton.classList.add("fa-eye");

            passwordInput.type = "password";
        } else {
            viewPasswordButton.classList.remove("fa-eye");
            viewPasswordButton.classList.add("fa-sharp");
            viewPasswordButton.classList.add("fa-eye-slash");
            passwordInput.type = "text";
        }

    })
}

function validateUserAndSubmit() {
    submitButton.addEventListener("click", () => {
        if (userInput.value.length >= 1 && passwordInput.value.length >= 1) {
            textMod.innerHTML ='<i class="fa-solid fa-circle-check"></i>  All the fields had been filled correctly, redirecting...';
            textMod.style.color = "#4caf50";
            setTimeout(() => {

                loginBoxContent.classList.add("submited")
            }, 3000)
        }
        else if (userInput.value == "" || passwordInput.value == "") {
            textMod.innerHTML = '<i class="fa-solid fa-xmark"></i>  There are one or two fields that have not been filled in yet.';
            textMod.style.color = "#f44336";
        }

        
    })
}

function returnSubmited() {
    okBtn.addEventListener("click", () => {
        loginBoxContent.classList.remove("submited")
        userInput.value = "";
        passwordInput.value = "";
        textMod.innerHTML = "";
    })
}

viewPassword();
validateUserAndSubmit();
returnSubmited();
