console.log("App.js is runing!");

const toggle = {
  isHidden: true,
  textToShow: "Some random detail text!",
  buttonText: "Show details"
};

const toggleVisibility = () => {
  if (toggle.isHidden) {
    toggle.buttonText = "Hide details";
    toggle.isHidden = false;
  } else {
    toggle.buttonText = "Show details";
    toggle.isHidden = true;
  }
  render();
};

const appRoot = document.querySelector("div#app");

const render = () => {
  // JSX - JavaScript XML
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{toggle.buttonText}</button>
      <p hidden={toggle.isHidden}>{toggle.textToShow}</p>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
