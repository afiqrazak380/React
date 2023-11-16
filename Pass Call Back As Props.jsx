// Define a React component called MyApp that extends the base React.Component class
class MyApp extends React.Component {
  // Constructor method called when an instance of the component is created
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);
    // Set the initial state with an empty inputValue
    this.state = {
      inputValue: "",
    };
    // Bind the handleChange method to the current instance
    this.handleChange = this.handleChange.bind(this);
  }

  // Method to handle input changes and update the state
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  // Render method that defines the structure of the component
  render() {
    return (
      <div>
        {/* Pass the input and handleChange props to GetInput */}
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />

        {/* Pass the input prop to RenderInput */}
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

// Define a new React component called GetInput
class GetInput extends React.Component {
  // Render method that defines the structure of the component
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        {/* Access the input and handleChange props */}
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

// Define a new React component called RenderInput
class RenderInput extends React.Component {
  // Render method that defines the structure of the component
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        {/* Access the input prop */}
        <p>{this.props.input}</p>
      </div>
    );
  }
}
