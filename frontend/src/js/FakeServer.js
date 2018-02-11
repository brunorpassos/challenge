var creditas = creditas || {};

creditas.FakeServer = (function() {
  'use strict';

  var message = null;

  function submitedMessage(msg) {
    message = msg;
    sendResponse(message);
  }

  function sendResponse(message) {
    var responseMessage = defaultFakeMessages(message);
    creditas.Message.receiveMessage(responseMessage);
  }

  function defaultFakeMessages(message) {
    switch(message) {
      case "Olá":
          return "Olá, tudo bom?"
          break;
      case "Oi":
          return "Oi, tudo bom?"
          break;
      default:
          return "Você esta abusando do meu conhecimento"
    }
  }

  return {
    submitedMessage
  }

}());
