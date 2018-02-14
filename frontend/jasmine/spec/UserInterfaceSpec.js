describe("UserInterface", function() {
  describe("when user sends a message", function() {
    var textInput = null;
    var sendBtn = null;

    beforeEach(function() {
      textInput = document.querySelector(".message-input__text").value = "Olá";
      inputBox = document.querySelector(".message-input__text");
      sendBtn = document.querySelector(".message-input__button");
    });

    afterEach(function() {
      document.querySelector(".message-list").innerHTML = "";
    });

    it("should print the message on screen with the correct class", function() {
      sendBtn.click();
      var sentMessageClass = document.querySelector(".message-list").firstElementChild.classList.contains("sent-message");
      expect(sentMessageClass).toBe(true);
    });

    it("should create list element on screen", function() {
      sendBtn.click();
      var listNodes = document.querySelector(".message-list").childNodes[0];
      expect(listNodes.tagName).toBe("LI");
    });

    it("shoud return the correct datetime", function() {
      var dateMock = new Date("Wed Feb 14 2018 18:42:49 GMT-0200 (-02)")
      expect(creditas.UserInterface.parseTime(dateMock)).toBe("18:42");
    }); 
  });

  describe("when user receives a message", function() {

    beforeEach(function() {
      creditas.Message.receiveMessage("Oi");
    });

    afterEach(function() {
      document.querySelector(".message-list").innerHTML = "";
    });

    it("should print the message on screen with the correct class", function() {
      var receivedMessageClass = document.querySelector(".message-list").firstElementChild.classList.contains("received-message");
      expect(receivedMessageClass).toBe(true);
    });
  });

  describe("message behavior", function() {
    var messageScreenWidth = null;
    var messageWidth = null;

    beforeEach(function() {
      messageScreenWidth = document.querySelector(".message-list").offsetWidth
    });

    afterEach(function() {
      document.querySelector(".message-list").innerHTML = "";
    });

    it("should not have a message larger than screen size", function() {
      var message = "Teste de mensagem longa para ver se a mensagem quebra na tela"
      creditas.Message.sendMessage(message);
      messageWidth = document.querySelector(".message-list").firstElementChild.offsetWidth;
      expect(messageWidth < messageScreenWidth).toBe(true);
    });

    it("should break the word in pieces if it is too large", function() {
      var message = "PalavraMuitoLongaTestandoParaVerSeQuebraNaTela";
      creditas.Message.sendMessage(message);
      messageWidth = document.querySelector(".message-list").firstElementChild.offsetWidth;
      expect(messageWidth < messageScreenWidth).toBe(true);
    });
  });
});
