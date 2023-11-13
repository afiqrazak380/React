class Counter extends React.Component {
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);
    // Initialize the state with a count property set to 0
    this.state = {
      count: 0,
    };

    // Bind the methods to the current instance of the component
    this.increment = this.increament.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  // Define a method to increment the count in the state by 1
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  // Define a method to decrement the count in the state by 1
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  // Define a method to reset the count in the state to 0
  reset() {
    this.setState({
      count: 0,
    });
  }

  // Render method to define the structure of the component
  render() {
    return (
      <div>
        {/* Button to increment the count, calling the increment method */}
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>

        {/* Button to decrement the count, calling the decrement method */}
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>

        {/* Button to reset the count, calling the reset method */}
        <button className="reset" onClick={this.reset}>
          Reset
        </button>

        {/* Display the current count */}
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}
