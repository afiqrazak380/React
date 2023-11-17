// Define a React component named MyComponent
class MyComponent extends React.Component {
  // Constructor to initialize the component's state
  constructor(props) {
    super(props);
    // Initialize the state with a property 'display' set to true
    this.state = {
      display: true,
    };
    // Bind the toggleDisplay method to the component instance
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  // Method to toggle the 'display' state
  toggleDisplay() {
    // Use setState to toggle the value of 'display'
    this.setState((state) => ({
      display: !state.display,
    }));
  }

  // Render method to define the component's UI
  render() {
    // Use an if statement for conditional rendering
    if (this.state.display) {
      // Return JSX when display is true
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Display!</h1>
        </div>
      );
    } else {
      // Return JSX when display is false
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}
