var messageForm = document.getElementById('message-form');
var messageField = document.getElementById('the-message');
var cypherField = document.getElementById('cypher-and-increment');
var cypherSelect = document.getElementById('cypher-select');
var increment = document.createElement('select');
var incrementLabel = document.createElement('label');
var codeRadio = document.getElementById('code-radio');
var decodeRadio = document.getElementById('decode-radio');
var submitButton = document.getElementById('submit-button');
var resultTitle = document.getElementById('result-title');
var resultField = document.getElementById('result-field');
var linebreak = document.createElement('br');
var userInput = '';
var action = 'code';
var cypher = 'base64';
var key = 1;

increment.setAttribute('id', 'increment');
increment.setAttribute('name', 'increment');


incrementLabel.setAttribute('for', 'increment');
incrementLabel.innerText = 'Informe o incremento a ser utilizado:';

function fillSelect(select, optionsNumber) {
    var incrementOption;
    for (var i = 1; i <= optionsNumber; i++) {
        incrementOption = document.createElement('option');
        incrementOption.value = `${i}`;
        incrementOption.innerText = `${i}`;
        select.appendChild(incrementOption);
    }
}

fillSelect(increment, 126);

increment.addEventListener('change', () => {
    key = parseInt(increment.value);
});

codeRadio.addEventListener('click', () => {
    submitButton.innerText = 'codificar mensagem';
    resultTitle.innerText = 'Sua Mensagem Codificada:';
    action = 'code';
});

decodeRadio.addEventListener('click', () => {
    submitButton.innerText = 'decodificar mensagem';
    resultTitle.innerText = 'Sua Mensagem Decodificada:';
    action = 'decode';
});

cypherSelect.addEventListener('change', () => {
    if (cypherSelect.value == 'caesar') {
        cypherField.appendChild(incrementLabel);
        cypherField.appendChild(linebreak);
        cypherField.appendChild(increment);
        cypher = 'caesar';
    } else {
        incrementLabel.remove();
        increment.remove();
        cypher = 'base64';
    }
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    userInput = messageField.value;

    if (action == 'code' && cypher == 'base64')
        resultField.innerText = encodeToBase64(userInput);
    else if (action == 'decode' && cypher == 'base64')
        resultField.innerText = decodeFromBase64(userInput);

    if (action == 'code' && cypher == 'caesar')
        resultField.innerText = encodeToCaesar(userInput, key);
    else if (action == 'decode' && cypher == 'caesar')
        resultField.innerText = decodeFromCaesar(userInput, key);
});
