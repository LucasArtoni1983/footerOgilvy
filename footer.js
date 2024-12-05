// adiciona um evento de click ao botão
document.querySelector('button').addEventListener('click', function (event){
    // evita o comportamento padrão do botão
    event.preventDefault();

    // captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const empresa = document.getElementById('empresa').value;
    const ajuda = document.getElementById('ajuda').value;

    console.log(`Nome completo: ${nome}`)
    console.log(`Email: ${email}`);
    console.log(`Empresa: ${empresa}`)
    console.log(`Como podemos te ajudar? ${ajuda}`)
    
})