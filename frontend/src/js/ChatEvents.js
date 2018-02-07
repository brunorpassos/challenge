var creditas = creditas || {};

creditas.ChatEvents = (function() {
  'use strict'
  
  function eventsHandler() {
    onClickEvent();
    onKeypressEvent();
  }

  function onClickEvent() {
    document.getElementById("cred-btn__send").addEventListener("click", function(e) {
      resolveMessage();
    }, false);    
  }
  
  function onKeypressEvent() {
    document.getElementById("cred-input__text").addEventListener("keypress", function(e) { 
      var pressedKey = e.which || e.keyCode;
      if (pressedKey == 13) {
        resolveMessage();
      }
    }, false);    
  }

  function resolveMessage() {
    sendMessage();
    cleanInputMessage();
  }

  function sendMessage() {
    var msgText = document.getElementById("cred-input__text").value || "";
    if (msgText) {
      creditas.Message.sendMessage(msgText);
    }
  }

  function cleanInputMessage() {
    document.getElementById("cred-input__text").value = "";
  }

  return {
    eventsHandler: eventsHandler
  }
}());

