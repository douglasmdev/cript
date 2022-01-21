
var messageForm = document.getElementById('message-form');
var cypherField = document.getElementById('cypher-and-increment');
var cypherSelect = document.getElementById('cypher-select');

var increment = document.createElement('input');
increment.type = 'text';
increment.setAttribute('id', 'increment');
increment.setAttribute('class', 'wide-text-input');

var incrementLabel = document.createElement('label');
incrementLabel.setAttribute('for', 'increment');
incrementLabel.innerText = 'Informe o incremento a ser utilizado:';

var linebreak = document.createElement('br');

var codeRadio = document.getElementById('code-radio');
var decodeRadio = document.getElementById('decode-radio');

var submitButton = document.getElementById('submit-button');

var resultTitle = document.getElementById('result-title');

codeRadio.addEventListener('click', () => {
    submitButton.innerText = 'codificar mensagem';
    resultTitle.innerText = 'Sua Mensagem Codificada:';
});

decodeRadio.addEventListener('click', () => {
    submitButton.innerText = 'decodificar mensagem';
    resultTitle.innerText = 'Sua Mensagem Decodificada:';
});

cypherSelect.addEventListener('change', () => {
    if (cypherSelect.value == 'cesar') {
        cypherField.appendChild(incrementLabel);
        cypherField.appendChild(linebreak);
        cypherField.appendChild(increment);
    } else {
        incrementLabel.remove();
        increment.remove();
    }
});