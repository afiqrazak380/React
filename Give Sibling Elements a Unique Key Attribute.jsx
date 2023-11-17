// Array of front-end frameworks
const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

// React functional component for rendering frameworks
function Frameworks() {
  // Map over the frontEndFrameworks array to create an array of li elements
  const renderFrameworks = frontEndFrameworks.map((framework, index) => {
    // Add a prefix or any unique identifier to the index for a more robust key
    const uniqueKey = `framework_${index}`;
    // Return a li element with a unique key and text from frontEndFrameworks
    return <li key={uniqueKey}>{framework}</li>;
  });

  // Return the JSX structure containing an h1 element and a ul element with li elements
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
