// Seletores
const button = document.querySelector('button');
const form = document.getElementById('contactForm');
const mensagemSucesso = document.getElementById('successMessage');
const mensagemErro = document.getElementById('errorMessage');

// Funções auxiliares
function exibirMensagemSucesso() {
  mensagemSucesso.style.display = "block";
  mensagemErro.style.display = "none";
}

function exibirMensagemErro() {
  mensagemErro.style.display = "block";
  mensagemSucesso.style.display = "none";
}

function capturarValores() {
  return {
    nome: document.getElementById('nome').value.trim(),
    email: document.getElementById('email').value.trim(),
    empresa: document.getElementById('empresa').value.trim(),
    ajuda: document.getElementById('ajuda').value.trim()
  };
}

// Evento de clique no botão
button.addEventListener('click', function (event) {
  event.preventDefault(); // Evita o comportamento padrão

  const { nome, email, empresa, ajuda } = capturarValores();

  if (nome && email && empresa && ajuda) {
    exibirMensagemSucesso();
    console.log(`Nome completo: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Empresa: ${empresa}`);
    console.log(`Como podemos te ajudar? ${ajuda}`);
  } else {
    exibirMensagemErro();
  }

  form.reset();
});