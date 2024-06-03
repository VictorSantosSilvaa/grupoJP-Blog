const form = document.getElementById("form")
const message = document.getElementById("message")

form.addEventListener("submit", (e) =>{
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const state = document.getElementById("confirmPassword");

    e.preventDefault();

//transformar os dados em json


const userData = JSON.stringify({
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
})

fetch("http://10.92.198.38:8080/signup", {
    method: "Post",
    body: userData,
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
    .then((result) => result.json())
    .then((data) => message.innerText = data.message)
    .then((err) => console.log(err));

    console.log(name.value);
})
