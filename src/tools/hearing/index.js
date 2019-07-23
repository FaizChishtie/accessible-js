'use strict'

// export all public hearing functions here

const readAloud = (text) => {
    var msg = new SpeechSynthesisUtterance();
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 2; //0 to 2
    msg.text = text;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
}

module.exports = {
    readAloud,
}