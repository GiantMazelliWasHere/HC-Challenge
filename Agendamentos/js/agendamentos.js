// Variavéis
const button = document.querySelector("#enviar");
const inputNome = document.querySelector("#nome");
const inputConsuta = document.querySelector("#consulta");
const inputHorario = document.querySelector("#horario");
const inputPesquisa = document.querySelector("#inputPesquisa")

// Validação do Formulário

// Elemento p para o erro
const error = document.createElement('p');

// Função de limpeza
function clearForm() {
    buttonNome.value = '';
    inputConsuta.value = '';
    inputHorario.value = '';
    error.textContent = '';
}

// Criando o evento de botão
button.addEventListener(("click"), function(event) {
    event.preventDefault();

    // Validação

    //Nome
    if (inputNome.value === '') {
        error.textContent = "Este campo é obrigatório";
        inputNome.insertAdjacentElement("afterend", error);
        error.setAttribute("class", "error");
        return false;
    }

    // Consulta
    if (inputConsuta.value === '') {
        error.textContent = "Este campo é obrigatório";
        inputConsuta.insertAdjacentElement("afterend", error);
        error.setAttribute("class", "error");
        return false;
    }

    // Horario
    if (inputHorario.value === '') {
        error.textContent = "Este campo é obrigatório";
        inputHorario.insertAdjacentElement("afterend", error);
        error.setAttribute("class", "error");
        return false;
    }

    clearForm();
})

// Barra de Pesquisa

function apareceBarraDePesquisa(){
    inputPesquisa.style.display = 'inline-block';
}

function esconderBarraDePesquisa(){
    inputPesquisa.style.display = 'none';
}

