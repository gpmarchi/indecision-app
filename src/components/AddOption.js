import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = event => {
    event.preventDefault();

    const optionInput = document.querySelector("form input");

    const option = optionInput.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      optionInput.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}
