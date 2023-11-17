// Results component definition
class Results extends React.Component {
  // Results component constructor
  constructor(props) {
    super(props); // Call the constructor of the parent class (React.Component)
  }

  // Results component render method
  render() {
    {
      /* Change code below this line */
    }
    // Render an h1 element with text 'You Win!' if fiftyFifty is true, 'You Lose!' otherwise
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
    {
      /* Change code above this line */
    }
  }
}

// GameOfChance component definition
class GameOfChance extends React.Component {
  // GameOfChance component constructor
  constructor(props) {
    super(props); // Call the constructor of the parent class (React.Component)
    this.state = {
      counter: 1, // Initialize the state with a property 'counter' set to a value of 1
    };
    this.handleClick = this.handleClick.bind(this); // Bind the handleClick method to the current instance of the component
  }

  // handleClick method definition
  handleClick() {
    // Update the state by incrementing the counter by 1
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  // GameOfChance component render method
  render() {
    // Generate a random boolean value (true or false) with 50/50 odds
    const expression = Math.random() >= 0.5; // Change this line

    // Render the GameOfChance component structure
    return (
      <div>
        {/* Render a button with an onClick event that triggers the handleClick method */}
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        {/* Render the Results component, passing the random boolean value as the fiftyFifty prop */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        {/* Render a paragraph with the text 'Turn: N', where N is the value of the counter state */}
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}
