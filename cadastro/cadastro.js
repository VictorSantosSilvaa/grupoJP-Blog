const nameu = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const button = document.getElementById("button");

button.addEventListener("click", function (event) {

    event.preventDefault();

    const userData = JSON.stringify({
        name: nameu.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,

    });
    console.log(userData)

    fetch("http://10.92.198.38:8080/auth/signup", {
        method: "POST",
        body: userData,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data)
            window.location.href = "../login/login.html";
        })
        .catch((err) => {
            console.log(err)
        });
console.log("Deu certo")
});