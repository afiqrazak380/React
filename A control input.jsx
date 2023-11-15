// Define a React component named ControlledInput
class ControlledInput extends React.Component {
  // Constructor method for initializing the component's state and binding methods
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);
    // Initialize the component's state with an 'input' property set to an empty string
    this.state = {
      input: "",
    };
    // Bind the handleChange method to the component instance
    this.handleChange = this.handleChange.bind(this);
  }

  // Method to handle changes in the input field
  handleChange(event) {
    // Update the component's state with the new value from the input field
    this.setState({
      input: event.target.value,
    });
  }

  // Render method to define the component's UI
  render() {
    return (
      <div>
        {/* Input element with 'value' and 'onChange' attributes */}
        <input
          value={this.state.input} // Set the value of the input to the 'input' property of the state
          onChange={this.handleChange} // Attach the handleChange method to the 'onChange' event
        />
        {/* Heading to label the controlled input */}
        <h4>Controlled Input:</h4>
        {/* Display the current value of the input from the state */}
        <p>{this.state.input}</p>
      </div>
    );
  }
}
