var creditas = creditas || {};

creditas.UserInterface = (function() {
  'use strict'

  var listNode = null;
  var textNode = null;
  var timeNode = null;
  
  function displayMessage(message, messageType) {
    var messageTime = handleMessageTime(message);
    var messageText = handleMessageText(message, messageType);
    document.querySelector(".message-list").appendChild(messageText).appendChild(messageTime);
    scrollMessageToView(messageText);
  }

  function handleMessageText(message, messageType) {
    listNode = document.createElement("li");
    textNode = document.createElement("span");
    textNode.appendChild(document.createTextNode(message.text))
    listNode.setAttribute("class", messageType);
    listNode.appendChild(textNode);
    return listNode;
  }

  function handleMessageTime(message) {
    var messageTime = parseTime(message.timestamp);
    var dateSpan = document.createElement("span");
    dateSpan.innerText = messageTime;
    dateSpan.setAttribute("class", "message-time");
    return dateSpan;
  }

  function parseTime(time) {
    var hours = time.getHours();
    var minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
    var timeNow = hours + ":" + minutes;
    return timeNow;
  }

  function scrollMessageToView(messageText) {
    messageText.parentNode.scrollTop = messageText.offsetTop
  }

  return {
    displayMessage: displayMessage,
    parseTime: parseTime
  }
}());

