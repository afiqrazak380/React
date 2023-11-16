class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Log a message to indicate that the component is considering whether to update
    console.log("Should I update?");

    // Change code below this line
    // Check if the next value is even, and return true if it is, indicating that the component should update
    return nextProps.value % 2 === 0;
    // Change code above this line
  }

  componentDidUpdate() {
    // Log a message when the component is re-rendered
    console.log("Component re-rendered.");
  }

  render() {
    // Render the current value in an h1 tag
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with a value of 0
    this.state = {
      value: 0,
    };
    // Bind the addValue method to the current instance of the component
    this.addValue = this.addValue.bind(this);
  }

  addValue() {
    // Update the state by incrementing the current value
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }

  render() {
    // Render a button to trigger the addValue method and the OnlyEvens component with the current value
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
