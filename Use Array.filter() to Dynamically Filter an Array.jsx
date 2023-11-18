// Define a React component called MyComponent that extends React.Component
class MyComponent extends React.Component {
  // Constructor method that initializes the component's state with an array of users
  constructor(props) {
    // Call the constructor of the parent class (React.Component)
    super(props);
    // Initialize the state with an array of user objects
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true,
        },
        {
          username: "Alan",
          online: false,
        },
        {
          username: "Mary",
          online: true,
        },
        {
          username: "Jim",
          online: false,
        },
        {
          username: "Sara",
          online: true,
        },
        {
          username: "Laura",
          online: true,
        },
      ],
    };
  }

  // Render method to define what the component should render
  render() {
    // Filter the users to get only those who are online
    const usersOnline = this.state.users.filter((user) => user.online); // Change this line

    // Map over the online users to create an array of li elements with their usernames
    const renderOnline = usersOnline.map((user, index) => (
      <li key={index}>{user.username}</li>
    )); // Change this line

    // Render a div containing an h1 and an unordered list with the online users
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}
