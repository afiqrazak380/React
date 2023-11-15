// Define a class MyForm that extends React.Component
class MyForm extends React.Component {
  // Constructor method that takes props as a parameter
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);

    // Set the initial state of the component
    this.state = {
      input: "", // Initialize the input property in state with an empty string
      submit: "", // Initialize the submit property in state with an empty string
    };

    // Bind the context of the handleChange and handleSubmit methods to the current instance
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Event handler method for handling changes in the input field
  handleChange(event) {
    // Update the input property in state with the current value of the input field
    this.setState({
      input: event.target.value,
    });
  }

  // Event handler method for handling form submission
  handleSubmit(event) {
    // Prevent the default form submit behavior (which would cause a page refresh)
    event.preventDefault();

    // Set the submit property in state equal to the current input
    this.setState({
      submit: this.state.input,
    });
  }

  // Render method that defines the component's UI
  render() {
    return (
      // Return a div containing a form and an h1 tag
      <div>
        {/* Form element with a submit event handler */}
        <form onSubmit={this.handleSubmit}>
          {/* Input element with value and onChange attributes */}
          <input value={this.state.input} onChange={this.handleChange} />
          {/* Button to submit the form */}
          <button type="submit">Submit!</button>
        </form>
        {/* Heading element displaying the value of the submit property from the component's state */}
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
