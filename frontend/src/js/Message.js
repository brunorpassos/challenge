var creditas = creditas || {};

creditas.Message = (function() {
  'use strict';

  var message = null;
    
  var messageType = {
    sentMessage: "sent-message",
    receivedMessage: "received-message"
  }

  function sendMessage(sentMessage) {
    displayMessage(sentMessage, messageType.sentMessage);
    creditas.FakeServer.submitedMessage(sentMessage)
  }

  function receiveMessage(receivedMessage) {
    displayMessage(receivedMessage, messageType.receivedMessage)
  }

  function displayMessage(message, messageType) {
    var listNode = document.createElement("li")
    var textNode = document.createTextNode(message);
    listNode.setAttribute("class", messageType);
    listNode.appendChild(textNode)
    document.getElementById("cred__msg-screen").appendChild(listNode);
    listNode.scrollIntoView();
  }

  return {
    sendMessage: sendMessage,
    receiveMessage: receiveMessage
  }

}());