"use strict";

var text = document.querySelector("#text");
var view = document.querySelector("#view");

var update = function update() {
  view.srcdoc = text.value;
};