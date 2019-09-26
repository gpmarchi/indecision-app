console.log("App.js is runing!");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};

const onFormSubmit = event => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    render();
  }
};

const removeAllOptions = () => {
  app.options = [];
  render();
};

const appRoot = document.querySelector("div#app");

const render = () => {
  // JSX - JavaScript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your options"
          : "No options"}
      </p>
      <p>{app.options.length}</p>
      <button onClick={removeAllOptions}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
