// Styles for the textarea
const textAreaStyles = {
  width: 235,
  margin: 5,
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // State initialization - userInput for input value and toDoList for the list of items
    this.state = {
      userInput: "",
      toDoList: [],
    };
    // Binding event handlers to the component instance
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Event handler for form submission
  handleSubmit() {
    // Splitting the user input into an array using commas as separators
    const itemsArray = this.state.userInput.split(",");
    // Updating the state with the new toDoList
    this.setState({
      toDoList: itemsArray,
    });
  }

  // Event handler for input changes
  handleChange(e) {
    // Updating the state with the new user input
    this.setState({
      userInput: e.target.value,
    });
  }

  render() {
    // Mapping the toDoList array to JSX elements (list items)
    const items = this.state.toDoList.map((item, index) => (
      <li key={index}>{item}</li>
    )); // Change this line

    return (
      <div>
        {/* Textarea for user input */}
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        {/* Button to trigger list creation */}
        <button onClick={this.handleSubmit}>Create List</button>
        {/* Header for the to-do list */}
        <h1>My "To Do" List:</h1>
        {/* Displaying the list items */}
        <ul>{items}</ul>
      </div>
    );
  }
}
