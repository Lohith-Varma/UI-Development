import {Component} from 'react';
import{MyStudentAddress} from './MyStudentData';
import MyStudentInfo from './MyStudentData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Welcome to ReactJS Class Components</h1>
        <MyData></MyData>
        <MyStudentInfo></MyStudentInfo>
        <MyStudentAddress></MyStudentAddress>
      </div>
    );
  }
}
class MyData extends Component {
  render() {
    var myname="Lohith Varma";
    return (
      <div className="MyData">
        <h3>Hello this is myData class Component</h3>
        <p>Name: {myname}</p>
      </div>
    );
  }
}

export default App;