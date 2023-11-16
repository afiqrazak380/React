const styles = {
  color: "purple",
  fontSize: "40", // Added "px" for the unit
  border: "2px solid purple",
};

class Colorful extends React.Component {
  render() {
    return <div style={styles}>Style Me!</div>;
  }
}
