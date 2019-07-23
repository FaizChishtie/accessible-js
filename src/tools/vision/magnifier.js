'use strict'
 
// export all public vision functions here

class Magnifier {};
Magnifier.magnify = (document) => {
        let sheet = document.styleSheets[0];
        sheet.insertRule("div.magnify p:hover{outline-style: solid; outline-color: black;outline-width: thick;}")
 
        for (element in document.querySelectorAll("p"))
        {
            let wrapper = document.createElement('div');
            wrapper.classList.add = ("magnify")
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendchild(element);
        }
    }
Magnifier.type = "magnifier"
 
module.exports = {
    Magnifier,
}