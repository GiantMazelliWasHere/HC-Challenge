// Variavéis
const button = document.querySelector("#enviar");
const inputNome = document.querySelector("#nome");
const inputConsuta = document.querySelector("#consulta");
const inputHorario = document.querySelector("#horario");

// Elemento p para o erro
const error = document.createElement('p');

// Função de limpeza
function clearForm() {
    inputNome.value = '';
    inputConsuta.value = '';
    inputHorario.value = '';
    error.textContent = '';
}

// Criando o evento de botão
button.addEventListener(("click"), function(event) {
    event.preventDefault();

    if (inputNome.value === '') {
        error.textContent = "Este campo é obrigatório";
        inputNome.insertAdjacentElement("afterend", error);
        error.setAttribute("class", "error");
        return false;
    }

    if (inputConsuta.value === '') {
        error.textContent = "Este campo é obrigatório";
        inputConsuta.insertAdjacentElement("afterend", error);
        error.setAttribute("class", "error");
        return false;
    }

    if (inputHorario.value === '') {
        error.textContent = "Este campo é obrigatório";
        inputHorario.insertAdjacentElement("afterend", error);
        error.setAttribute("class", "error");
        return false;
    }

    console.log(inputNome.value);
    console.log(inputConsuta.value);
    console.log(inputHorario.value);
    
    clearForm();
})