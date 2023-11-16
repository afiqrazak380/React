// Define a React component named MyComponent that extends the React.Component class
class MyComponent extends React.Component {
  // Constructor method for initializing the component's state and binding event handlers
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);
    // Set the initial state of the component with an empty message
    this.state = {
      message: "",
    };
    // Bind the handleEnter method to the current instance of the component
    this.handleEnter = this.handleEnter.bind(this);
    // Bind the handleKeyPress method to the current instance of the component
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Lifecycle method called after the component has been inserted into the DOM
  componentDidMount() {
    // Add a keydown event listener to the document, calling the handleKeyPress method
    document.addEventListener("keydown", this.handleKeyPress);
  }

  // Lifecycle method called before the component is removed from the DOM
  componentWillUnmount() {
    // Remove the keydown event listener for cleanup to prevent memory leaks
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // Event handler method to update the state when the enter key is pressed
  handleEnter() {
    this.setState((state) => ({
      // Update the message in the state by appending a string
      message: state.message + "You pressed the enter key! ",
    }));
  }

  // Event handler method to check if the pressed key is the enter key
  handleKeyPress(event) {
    // Check if the key code of the pressed key is 13 (Enter key)
    if (event.keyCode === 13) {
      // Call the handleEnter method to update the state
      this.handleEnter();
    }
  }

  // Render method to define the structure of the component's UI
  render() {
    return (
      <div>
        {/* Render an h1 element with the current message from the component's state */}
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
