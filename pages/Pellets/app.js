const input = document.getElementById('input')
const btncopy = document.getElementById('btnCopy')

input.onclick = function() {
    // Select text
    myInp.select();

    // Copy text
    document.execCommand('Copy');

    // Display an alert
    alert("Text copied!")

}