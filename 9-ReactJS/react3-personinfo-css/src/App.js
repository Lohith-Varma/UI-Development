import './App.css';

function App() {
  var name = "NSRIT";
  var FirstName = "Lohith";
  var LastName = "Varma";
  var age = 20;
  var Job = "Developer";
  const mystyle = {
    margin: "28px",
    padding: "28px",
    boxSizing: "border-box",
    borderRadius: "10px",
    boxShadow:'0 8px 20px #ddd'
  }
  return (
    <div className="App">
      <div style={mystyle}>
        <h1>Hello Welcome to ReactJS with CSS</h1>
        <h3>Personal Information</h3>
        First Name:{FirstName}<br></br>
        Last Name :{LastName}<br></br>
        Age       :{age}<br></br>
        Job       :{Job}<br></br>
      </div>
    </div>
  );
}
export default App;