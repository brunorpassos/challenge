describe("ChatEvents", function() {
  describe("when user tries to send a valid message", function() {
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

    it("should send message after click on submit btn", function() {
      sendBtn.click();
      expect(document.getElementById("cred__msg-screen").firstElementChild.innerHTML).toBe(textInput)
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
      expect(document.getElementById("cred__msg-screen").firstElementChild.innerHTML).toBe(textInput)
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
      textInput = document.getElementById("cred-input__text").value = "";
      inputBox = document.getElementById("cred-input__text");
      sendBtn = document.getElementById("cred-btn__send");
    });

    it("should not send a message on click", function() {
      sendBtn.click();
      expect(document.getElementById("cred__msg-screen").children.length).toBe(0)
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
      expect(document.getElementById("cred__msg-screen").children.length).toBe(0)
    });

  });
});