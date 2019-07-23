'use strict'
class Hearing {};

// export all public hearing functions here
Hearing.handleDataRecieved = (document) => {};
Hearing.readAloud = (text) => {
    var msg = new SpeechSynthesisUtterance();
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 2; //0 to 2
    msg.text = text;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
    msg.onend = function(e) {
        console.log('Finished speaking in ' + event.elapsedTime/1000 + ' seconds.');
      };
}

//takes in a dom/set of html elements and parses the content to be all plaintext with no tags
Hearing.parseTags = (dom) => {
    var text = "";
    //TODO


}
module.exports = {
    Hearing
}