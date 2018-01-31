var creditas = creditas || {};

creditas.chat = (function(){
  'use strict';

  function init(){
    eventHandlers();
  }

  function eventHandlers() {
    document.getElementById("cred-btn__send").addEventListener("click", function(e) {
      resolveMessage(e);

      var msg = e.currentTarget.previousElementSibling.value;
      var inputTag = e.currentTarget.previousElementSibling;
      var msgBox = e.currentTarget.parentElement.previousElementSibling;
      if (msg != "") {
        sendMessage(msg, msgBox);
      }
    }, false);

    document.getElementById("cred-input__text").addEventListener("keypress", function(e) { 
      var pressedKey = e.which || e.keyCode;
      if (pressedKey == 13) {
        resolveMessage(e);
        
        var msg = e.currentTarget.value;
        var msgBox = e.currentTarget.parentElement.previousElementSibling;
        var inputTag = e.currentTarget;
        if (msg != "") {
          sendMessage(msg, msgBox);
        }
      }
    }, false);
  }

  function resolveMessage() {

  }

  function sendMessage(msg, msgBox) {
    var listNode = createDOMElements(msg);
    msgBox.appendChild(listNode);
    listNode.scrollIntoView();
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
