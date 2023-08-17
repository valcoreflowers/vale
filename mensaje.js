var originalInput = document.getElementById('mens1')
var incriptado=document.getElementById("mens3")
let numeros=document.querySelector("#numeros").value
var salidaoriginal=document.getElementById("mens2")
var salidaencriptada=document.getElementById("mens4")
numeros=parseInt(numeros)
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Textocifra() {
    let originalMessage = originalInput.value.toLowerCase()
    let encryptedMessage = ''
    let numeros=document.querySelector("#numeros").value
    numeros=parseInt(numeros)
    console.log(numeros)

    originalMessage.split('').forEach((char) => {
        let originalIndex = alphabet.indexOf(char)
        
        if (originalIndex !== -1) {
            let newIndex = (originalIndex + numeros) % alphabet.length
            encryptedMessage += alphabet[newIndex]
            if (newIndex < 0) {
                newIndex += alphabet.length
            }
        } else {
            encryptedMessage += char
        }
    })

    salidaoriginal.value=encryptedMessage
}
function Textodes() {
    let originalMessage = incriptado.value.toLowerCase()
    let decryptedMessage = '';

    let numeros = parseInt(document.querySelector("#numeros").value)

    originalMessage.split('').forEach((char) => {
        let originalIndex = alphabet.indexOf(char)
        
        if (originalIndex !== -1) {
            let newIndex = (originalIndex - numeros + alphabet.length) % alphabet.length
            decryptedMessage += alphabet[newIndex]
        } else {
            decryptedMessage += char
        }
    })

    salidaencriptada.value = decryptedMessage
}

function reiniciar() {
    originalInput.value = ""
    incriptado.value = ""
    salidaoriginal.value = ""
    salidaencriptada.value = ""
    document.querySelector("#numeros").value = "1"
}