var creditas = creditas || {};

creditas.chat = (function(){
  'use strict';

  function init(){
    eventHandlers();
  }

  function eventHandlers() {
    document.getElementById("cred-btn__send").addEventListener("click", function(e) {
      resolveMessage(e);      
    }, false);

    document.getElementById("cred-btn__send2").addEventListener("click", function(e) {
      resolveMessage(e);      
    }, false);

    document.getElementById("cred-input__text").addEventListener("keypress", function(e) { 
      var pressedKey = e.which || e.keyCode;
      if (pressedKey == 13) {
        resolveMessage(e);
      }
    }, false);

    document.getElementById("cred-input__text2").addEventListener("keypress", function(e) { 
      var pressedKey = e.which || e.keyCode;
      if (pressedKey == 13) {
        resolveMessage(e);
      }
    }, false);
  }

  function resolveMessage(e) {
    var msg = "";
    var msgDisplay = null;

    if (e.constructor.name == "MouseEvent") {
      msg = e.currentTarget.previousElementSibling.value;
      msgDisplay = e.currentTarget.parentElement.previousElementSibling;
    } else {
      msg = e.currentTarget.value;
      msgDisplay = e.currentTarget.parentElement.previousElementSibling;
    }

    if (msg != "") { sendMessage(msg, msgDisplay); }
  }

  function sendMessage(msg, msgDisplay) {
    var printMessage = createDOMElements(msg);
    msgDisplay.appendChild(printMessage);
    printMessage.scrollIntoView();
  }

  function createDOMElements(msg) {
    var listNode = document.createElement("li")
    var textNode = document.createTextNode(msg);
    listNode.setAttribute("class", "sent-message");
    listNode.appendChild(textNode);
    return listNode;
  }

  return {
    init: init
  }

}());
