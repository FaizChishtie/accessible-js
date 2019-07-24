'use strict'
class Hearing {};

// export all public hearing functions here
Hearing.handleDataRecieved = (document) => {};
Hearing.readAloud = (text) => {
    let msg = new SpeechSynthesisUtterance();
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 2; //0 to 2
    msg.text = text;
    msg.lang = 'en-US';
    speechSynthesis.speak(msg);
    msg.onend = (e) => {
        console.log('Finished speaking in ' + event.elapsedTime/1000 + ' seconds.');
      };
}

//takes in a DOM object and parses it into a string
Hearing.parseTags = (domString) => {
    //parses dom into a string, including all tags
    let content = domString.getAllTagged("body")[0].innerHTML;
    //replace tags with newlines for readability and for passing into readAloud
    let res = content.replace(/(<([^>]+)>)/ig,"\n");
    res = res.replace(/(?:\r\n|\r|\n\n)/g, '\n');
    return res;

}
module.exports = {
    Hearing
}