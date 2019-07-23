'use strict'

// static class for configuration

class Configuration {
};

// defaults
Configuration.enabled = true;
Configuration.developer = {
    vision: {
        magnifierSupport: true,
        colorblindSupport: true,
    },
    hearing: {
        screenreaderSupport: true,
    }
}
// store this in cookies
Configuration.active = { 
    vision: {
        magnifier: false,
        colorblind: false,
    },
    hearing: {
        screenreader: false,
    },
}

const fromJson = (json) => {
    // test if props undefined or not makes spaghetti looking code
    // but required
    const {enabled, developer, active} = json;
    if (notUndef(enabled)) {
        Configuration.enabled = enabled;
    }
    if (notUndef(developer)) {
        if (notUndef(developer.hearing)) {
            if (notUndef(developer.hearing.screenreaderSupport)) {
                Configuration.developer.hearing.screenreaderSupport = developer.hearing.screenreaderSupport;
            }
        }
        if (notUndef(developer.vision)) {
            if (notUndef(developer.vision.magnifierSupport)) {
                Configuration.developer.vision.magnifierSupport = developer.vision.magnifierSupport;
            }
            if (notUndef(developer.vision.colorblindSupport)) {
                Configuration.developer.vision.colorblindSupport = developer.vision.colorblindSupport;
            }
        }
    }
    if (notUndef(active)) {
        if (notUndef(active.hearing)) {
            if (notUndef(active.hearing.screenreader)) {
                Configuration.active.hearing.screenreader = active.hearing.screenreader;
            }
        }
        if (notUndef(active.vision)) {
            if (notUndef(active.vision.magnifier)) {
                Configuration.active.vision.magnifier = active.vision.magnifier;
            }
            if (notUndef(active.vision.colorblind)) {
                Configuration.active.vision.colorblind = active.vision.colorblind;
            }
        }
    }
}

const notUndef = (item) => {
    return item != undefined;
}

module.exports = {
    Configuration,
    fromJson,
};