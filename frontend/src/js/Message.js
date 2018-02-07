var creditas = creditas || {};

creditas.Message = (function() {
  'use strict';

  var message = null;

  function sendMessage(sentMessage) {
    displayMessage(sentMessage);
  }

  function displayMessage(message) {
    var listNode = document.createElement("li")
    var textNode = document.createTextNode(message);
    listNode.setAttribute("class", "sent-message");
    listNode.appendChild(textNode)
    document.getElementById("cred__msg-screen").appendChild(listNode);
    listNode.scrollIntoView();
  }

  function receiveMessage() {
    console.log(message)
  }

  return {
    sendMessage: sendMessage,
    receiveMessage: receiveMessage
  }

}());