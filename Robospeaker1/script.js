function speak() {
    const text = document.getElementById('textInput').value;
    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }
}

function stop() {
    speechSynthesis.cancel();
}
function clearText() {
    document.getElementById('textInput').value = '';
}
