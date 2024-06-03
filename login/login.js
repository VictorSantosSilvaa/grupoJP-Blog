const emailLogin = document.getElementById("email");
const passwordLogin = document.getElementById("password");
const button1 = document.getElementById("submit");

button1.addEventListener("submit", function (event) {
    event.preventDefault();

    const userData1 = JSON.stringify({
        email: emailLogin.value,
        password: passwordLogin.value,
    });

    fetch("http://10.92.198.38:8080/auth/signin", {
        method: "POST",
        body: userData1,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            // Verifica se a resposta da API contém um token
            if (data.token) {
                // Armazena o token no localStorage
                localStorage.setItem('token', data.token);
                console.log('Token armazenado com sucesso:', data.token);
                window.location.href = "/postagem/index.html";
            } else {
                console.log('Token não encontrado na resposta da API');
            }
        })
        .catch((err) => {
            console.log(err);
        });
});