'use strict'

// on install do this script

const install = () => {
    onComplete();
    return true;
}

const onComplete = () => {
    console.log('Install complete!\nMake sure to call the initialize function to allow accessible to re-render your page!');
}

module.exports = { 
    install,
}