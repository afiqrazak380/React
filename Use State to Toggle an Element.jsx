// Define a React component called MyComponent
class MyComponent extends React.Component {
  // Constructor method, called when an instance of the component is created
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);

    // Initialize the state of the component with a visibility property set to false
    this.state = {
      visibility: false,
    };

    // Bind the toggleVisibility method to the current instance of the component
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  // Define a method called toggleVisibility
  toggleVisibility() {
    // Use the setState function to update the state based on the previous state
    this.setState((state) => ({
      // Toggle the visibility property by negating its current value
      visibility: !state.visibility,
    }));
  }

  // Render method, responsible for rendering the component
  render() {
    // Conditional rendering based on the value of the visibility property in the state
    if (this.state.visibility) {
      // Render this block if visibility is true
      return (
        <div>
          {/* Button with an onClick event that calls the toggleVisibility method */}
          <button onClick={() => this.toggleVisibility()}>Click Me</button>
          {/* Display an h1 element when visibility is true */}
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      // Render this block if visibility is false
      return (
        <div>
          {/* Button with an onClick event that calls the toggleVisibility method */}
          <button onClick={() => this.toggleVisibility()}>Click Me</button>
        </div>
      );
    }
  }
}
