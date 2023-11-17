const inputStyle = {
  width: 235,
  margin: 5,
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // Initializing the component's state with input and userAge both set to an empty string
    this.state = {
      input: "",
      userAge: "",
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // Update the state when the input value changes, resetting userAge to an empty string
    this.setState({
      input: e.target.value,
      userAge: "",
    });
  }

  submit() {
    // Update the state, setting userAge to the current input value
    this.setState((state) => ({
      userAge: state.input,
    }));
  }

  render() {
    // Define JSX elements for buttons
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;

    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        {/* Input element for age with associated style and change event */}
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* Ternary expression for conditional rendering of buttons based on userAge */}
        {this.state.userAge === ""
          ? buttonOne
          : this.state.userAge < 18
          ? buttonThree
          : buttonTwo}
      </div>
    );
  }
}
