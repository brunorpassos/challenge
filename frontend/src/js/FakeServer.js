var creditas = creditas || {};

creditas.FakeServer = (function() {
  'use strict';

  var message = null;

  function init() {
    window.addEventListener("storage", function(e) {
      console.log("noix");
      console.log(e);
    } , false)
  }

  return {
    init: init
  }

}());