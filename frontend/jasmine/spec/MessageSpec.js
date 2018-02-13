describe("Message", function() {
  describe("when user sends a message", function() {
    var textInput = null;
    var sendBtn = null;

    beforeEach(function() {
      textInput = document.getElementById("cred-input__text").value = "Olá";
      inputBox = document.getElementById("cred-input__text");
      sendBtn = document.getElementById("cred-btn__send");
    });

    afterEach(function() {
      document.getElementById("cred__msg-screen").innerHTML = "";
    });

    it("should send the correct message", function() {
      var message = "Teste"
      creditas.Message.sendMessage(message);
      expect(document.getElementById("cred__msg-screen").firstElementChild.innerHTML).toBe(message);
    })

    it("should create list element on screen", function() {
      sendBtn.click();
      var listNodes = document.getElementById("cred__msg-screen").childNodes[0];
      expect(listNodes.tagName).toBe("LI");
    });

    it("should print the message on screen with the correct class", function() {
      sendBtn.click();
      var sentMessageClass = document.getElementById("cred__msg-screen").firstElementChild.classList.contains("sent-message");
      expect(sentMessageClass).toBe(true);
    });

  });

  describe("when user receives a message", function() {

    beforeEach(function() {
      creditas.Message.receiveMessage("Oi");
    });

    afterEach(function() {
      document.getElementById("cred__msg-screen").innerHTML = "";
    });

    it("should print the message on screen with the correct class", function() {
      var receivedMessageClass = document.getElementById("cred__msg-screen").firstElementChild.classList.contains("received-message");
      expect(receivedMessageClass).toBe(true);
    });
  });

  describe("message behavior", function() {
    var messageScreenWidth = null;
    var messageWidth = null;

    beforeEach(function() {
      messageScreenWidth = document.getElementById("cred__msg-screen").offsetWidth
    });

    afterEach(function() {
      document.getElementById("cred__msg-screen").innerHTML = "";
    });

    it("should not have a message larger than screen size", function() {
      var message = "Teste de mensagem longa para ver se a mensagem quebra na tela"
      creditas.Message.sendMessage(message);
      messageWidth = document.getElementById("cred__msg-screen").firstElementChild.offsetWidth;
      expect(messageWidth < messageScreenWidth).toBe(true);
    });

    it("should break the word in pieces if it is too large", function() {
      var message = "PalavraMuitoLongaTestandoParaVerSeQuebraNaTela";
      creditas.Message.sendMessage(message);
      messageWidth = document.getElementById("cred__msg-screen").firstElementChild.offsetWidth;
      expect(messageWidth < messageScreenWidth).toBe(true);
    });
  })
});
