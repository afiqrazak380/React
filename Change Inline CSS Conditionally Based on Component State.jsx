// Define a React component called GateKeeper
class GateKeeper extends React.Component {
  // Constructor to initialize the component's state
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);

    // Initialize the state with an empty input field
    this.state = {
      input: "",
    };

    // Bind the handleChange method to the current instance of the component
    this.handleChange = this.handleChange.bind(this);
  }

  // Event handler for input changes
  handleChange(event) {
    // Update the component's state with the new input value
    this.setState({ input: event.target.value });
  }

  // Render method to define the structure of the component
  render() {
    // Define a style object for the input element based on the input length
    let inputStyle = {
      border:
        this.state.input.length <= 15 ? "1px solid black" : "3px solid red",
    };

    // Return the JSX structure of the component
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        {/* Input element with style, value, and onChange properties */}
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

// Export the GateKeeper component for use in other files
export default GateKeeper;
