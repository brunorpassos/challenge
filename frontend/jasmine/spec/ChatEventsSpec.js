describe("ChatEvents", function() {
  describe("when user tries to send a valid message", function() {
    var textInput = null;
    var sendBtn = null;
    var messageTime = null;
    var timeNow = null;

    beforeEach(function() {
      textInput = document.querySelector(".message-input__text").value = "Olá";
      inputBox = document.querySelector(".message-input__text");
      sendBtn = document.querySelector(".message-input__button");
      messageTime = new Date();
      timeNow = creditas.UserInterface.parseTime(messageTime);
    });

    afterEach(function() {
      document.querySelector(".message-list").innerHTML = "";
    });

    it("should send message after click on submit btn", function() {
      sendBtn.click();
      expect(document.querySelector(".message-list").firstElementChild.innerText.replace(/\n|/g, "")).toBe(textInput + timeNow)
    });

    it("should send a message on enter keypress", function() {
      var enterEvent = new Event("keypress");
      enterEvent.key = "Enter";
      enterEvent.keyCode = 13;
      enterEvent.which = enterEvent.keyCode;
      enterEvent.altKey = false;
      enterEvent.ctrlKey = true;
      enterEvent.shiftKey = false;
      enterEvent.metaKey = false;
      enterEvent.bubbles = true;
      inputBox.dispatchEvent(enterEvent);
      expect(document.querySelector(".message-list").firstElementChild.innerText.replace(/\n|/g, "")).toBe(textInput + timeNow)
    });

    it("should clean the input after sending the message", function() {
      sendBtn.click();
      expect(inputBox.innerText).toBe("");
    });  
  });

  describe("when user tries to send a empty message", function() {
    var textInput = null;
    var sendBtn = null;

    beforeEach(function() {
      textInput = document.querySelector(".message-input__text").value = "";
      inputBox = document.querySelector(".message-input__text");
      sendBtn = document.querySelector(".message-input__button");
    });

    afterEach(function() {
      document.querySelector(".message-list").innerHTML = "";
    });

    it("should not send a message on click", function() {
      sendBtn.click();
      expect(document.querySelector(".message-list").children.length).toBe(0)
    });

    it("should not send a message with on enter event", function() {
      var enterEvent = new Event("keypress");
      enterEvent.key = "Enter";
      enterEvent.keyCode = 13;
      enterEvent.which = enterEvent.keyCode;
      enterEvent.altKey = false;
      enterEvent.ctrlKey = true;
      enterEvent.shiftKey = false;
      enterEvent.metaKey = false;
      enterEvent.bubbles = true;
      inputBox.dispatchEvent(enterEvent);
      expect(document.querySelector(".message-list").children.length).toBe(0)
    });
  });
});
