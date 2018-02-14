var creditas = creditas || {};

creditas.Message = (function() {
  'use strict';

  var message = null;
    
  var messageType = {
    sentMessage: "sent-message",
    receivedMessage: "received-message"
  }

  function sendMessage(message) {
    creditas.UserInterface.displayMessage(parseMessage(message), messageType.sentMessage);
    creditas.FakeServer.submitedMessage(message)
  }

  function receiveMessage(message) {
    creditas.UserInterface.displayMessage(parseMessage(message), messageType.receivedMessage)
  }

  function parseMessage(message) {
    var messageData = new Object();
    messageData.text = message;
    messageData.timestamp = new Date();
    return messageData;
  }

  return {
    sendMessage: sendMessage,
    receiveMessage: receiveMessage
  }
}());
