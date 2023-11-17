// Define a style object for the input element
const inputStyle = {
  width: 156,
  margin: 5,
};

// Define a React component named MagicEightBall
class MagicEightBall extends React.Component {
  // Constructor to initialize the component's state
  constructor(props) {
    super(props);
    this.state = {
      userInput: "", // User input for the question
      randomIndex: "", // Random index used to select an answer from the possibleAnswers array
    };
    this.ask = this.ask.bind(this); // Bind the ask method to the component instance
    this.handleChange = this.handleChange.bind(this); // Bind the handleChange method to the component instance
  }

  // Method triggered when the "Ask the Magic Eight Ball!" button is clicked
  ask() {
    if (this.state.userInput) {
      // Check if there is user input
      this.setState({
        randomIndex: Math.floor(Math.random() * 20), // Generate a random index between 0 and 19
        userInput: "", // Clear the user input after asking the question
      });
    }
  }

  // Method to handle changes in the input field
  handleChange(event) {
    this.setState({
      userInput: event.target.value, // Update the userInput state with the current value of the input field
    });
  }

  // Render method to define the component's UI
  render() {
    // Array of possible answers for the Magic Eight Ball
    const possibleAnswers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Most likely",
      "Outlook not so good",
      "Very doubtful",
    ];

    // Retrieve the answer based on the random index
    const answer = possibleAnswers[this.state.randomIndex];

    // Return the JSX for the component's UI
    return (
      <div>
        {/* Input field for the user to type their question */}
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        {/* Button to trigger the Magic Eight Ball's response */}
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        {/* Display the Magic Eight Ball's answer */}
        <p>{answer}</p>
      </div>
    );
  }
}
