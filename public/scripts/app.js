"use strict";

console.log("App.js is runing!");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();

  var option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    render();
  }
};

var removeAllOptions = function removeAllOptions() {
  app.options = [];
  render();
};

var appRoot = document.querySelector("div#app");

var render = function render() {
  // JSX - JavaScript XML
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options && app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeAllOptions },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "Item one"
      ),
      React.createElement(
        "li",
        null,
        "Item two"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        { type: "submit" },
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
