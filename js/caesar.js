function encodeToCaesar(str, num) {
    let encodedStr = '';
    let encodedChar = '';

    for (var i = 0; i < str.length; i++) {

        encodedChar = str.charCodeAt(i) + num;
        encodedStr += String.fromCharCode(encodedChar);
    }

    return encodedStr;
}

function decodeFromCaesar(str, num) {
    let decodedStr = '';
    let decodedChar = '';

    for (var i = 0; i < str.length; i++) {
        decodedChar = str.charCodeAt(i) - num;
        decodedStr += String.fromCharCode(decodedChar);
    }

    return decodedStr;
}