'use strict'
 
// export all public vision functions here

class Magnifier {};
Magnifier.magnify = (document) => {
        var newStyle = document.createElement('style'), sheet;
        document.head.appendChild(newStyle);
        sheet = newStyle.sheet;
        sheet.insertRule("div.magnify p:hover{outline-style: solid; outline-color: black;outline-width: thick;}")
        document.querySelectorAll("p").forEach(function(element, index, listObj)
        {
            let wrapper = document.createElement('div');
            wrapper.classList.add = ("magnify")
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
        }
        )
    }
Magnifier.type = "magnifier"
 
module.exports = {
    Magnifier,
}