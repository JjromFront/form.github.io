// View password
function viewPassword() {
    let viewPasswordButton = document.querySelector(".eye-icon");
    let passwordInput = document.querySelector("#passwordInput")

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
    let textMod = document.querySelector(".verification-text");
    const userInput = document.querySelector("#usernameInput").value;
    const passwordInput = document.querySelector("#passwordInput").value;
    const submitButton = document.querySelector("#submitBtn");

    submitButton.addEventListener("click", () => {
        if (userInput.length >= 1 && passwordInput.length >= 1) {
            textMod.innerHTML = '<i class="fa-solid fa-shield-check"></i>  All the fields had been filled correctly, redirecting...';
        }
        else if (userInput == "" || passwordInput == "") {
            textMod.innerHTML = '<i class="fa-solid fa-xmark"></i>  There are one or two fields that have not been filled in yet';
        }

        console.log(userInput.length)
    })
}

viewPassword();
validateUserAndSubmit();

