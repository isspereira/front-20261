document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formLogin");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const mensagemErro = document.getElementById("mensagemErro");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailValor = email.value.trim();
    const senhaValor = senha.value.trim();

    if (emailValor === "" || senhaValor === "") {
      mensagemErro.textContent = "Preencha todos os campos.";
      return;
    }

    mensagemErro.textContent = "";

    window.location.href = "index.html";
  });

  email.addEventListener("input", limparErro);
  senha.addEventListener("input", limparErro);

  function limparErro() {
    if (email.value.trim() !== "" && senha.value.trim() !== "") {
      mensagemErro.textContent = "";
    }
  }

});