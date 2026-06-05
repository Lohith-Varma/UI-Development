import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Welcome to own function component</h3>
      <MyFunction></MyFunction>
      <MyData></MyData>
    </div>
  );
}

function MyFunction() {
  var firstName = "Lohith";
  var lastName = "Varma";
  var age = 20;

  return (
    <div className = "MyFunction">
      <h3>This is MyFunction own component: Lohith</h3>
      <h3>Person Information</h3>
      FirstName : {firstName} <br></br>
      LastName : {lastName} <br></br>
      Age : {age} <br></br>
    </div>
  )
}

function MyData() {
  var name = "Lohith Varma";
  var branch = "CSE";

  return(
    <div className="MyData">
      <h3>This is my Own Data</h3>
      Name: {name} <br></br>
      Branch: {branch} <br></br>
    </div>
  )
}

export default App;
