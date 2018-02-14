describe("Message", function() {
  describe("when user sends a message", function() {
    var textInput = null;
    var sendBtn = null;
    var messageTime = null;
    var timeNow = null;

    beforeEach(function() {
      textInput = document.querySelector(".message-input__text").value = "Olá";
      inputBox = document.querySelector(".message-input__text");
      messageTime = new Date();
      timeNow = creditas.UserInterface.parseTime(messageTime);
    });

    afterEach(function() {
      document.querySelector(".message-list").innerHTML = "";
    });

    it("should send the correct message", function() {
      var messageText = "Teste";
      creditas.Message.sendMessage(messageText);
      expect(document.querySelector(".message-list").firstElementChild.innerText.replace(/\n|/g, "")).toBe(messageText + timeNow);
    })
  });
});
