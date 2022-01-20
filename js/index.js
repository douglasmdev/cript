
var messageForm = document.getElementById('message-form');
var cypherField = document.getElementById('cypher-and-increment');
var cypherSelect = document.getElementById('cypher-select');

var increment = document.createElement('input');
increment.type = 'text';
increment.setAttribute('id', 'increment');

var incrementLabel = document.createElement('label');
incrementLabel.setAttribute('for', 'increment');
incrementLabel.innerText = 'Informe o incremento a ser utilizado';

var linebreak = document.createElement('br');

var codeRadio = document.getElementById('code-radio');
var decodeRadio = document.getElementById('decode-radio');

var submitButton = document.getElementById('submit-button');

codeRadio.addEventListener('click', () => {
    submitButton.innerText = 'codificar mensagem';
});

decodeRadio.addEventListener('click', () => {
    submitButton.innerText = 'decodificar mensagem';
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