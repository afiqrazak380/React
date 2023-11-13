class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the component's state with an input property set to an empty string
    this.state = {
      input: "",
    };
    // Bind the handleChange method to the correct context (this)
    this.handleChange = this.handleChange.bind(this);
  }

  // Method called when the input value changes
  handleChange(event) {
    // Update the component's state with the new value from the input element
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}
