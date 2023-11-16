// Define a class component named MyApp that extends React.Component
class MyApp extends React.Component {
  // Constructor method that takes props as an argument and calls the parent constructor
  constructor(props) {
    // Call the constructor of the parent class (React.Component) and pass in props
    super(props);

    // Initialize the state of the component with a property named 'name' set to "CamperBot"
    this.state = {
      name: "CamperBot",
    };
  }

  // Render method that defines the structure of the component's UI
  render() {
    return (
      // Render a div element as the root of the component
      <div>
        {/* Comment: Render a Navbar component and pass the 'name' state property as a prop */}
        <Navbar name={this.state.name} />
        {/* Comment: End of the div element */}
      </div>
    );
  }
}

// Define a class component named Navbar that extends React.Component
class Navbar extends React.Component {
  // Constructor method that takes props as an argument and calls the parent constructor
  constructor(props) {
    // Call the constructor of the parent class (React.Component) and pass in props
    super(props);
  }

  // Render method that defines the structure of the component's UI
  render() {
    return (
      // Render a div element as the root of the component
      <div>
        {/* Comment: Render an h1 element with a text that includes the 'name' prop received from the parent */}
        <h1>Hello, my name is : {this.props.name} </h1>
        {/* Comment: End of the div element */}
      </div>
    );
  }
}
