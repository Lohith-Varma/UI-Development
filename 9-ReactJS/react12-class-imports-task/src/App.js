import {Component} from 'react';
import MyEmployee from './MyImports';
import{EmployeeAddress} from './MyImports';
import './index.css';
class App extends Component{
  render() {
    return (
      <div className="App">
        <h1> Welcome to ReactJS Class Employee Components</h1>
        <MyEmployee></MyEmployee>
        { <EmployeeAddress></EmployeeAddress> }
       {<MyData></MyData> }
      </div>
    );
  }
}
class MyData extends Component {
  render() {
    var employeesalary=50000;
    var empdepartment="IT";
    return (
      <div className="MyData">
        <h3>Employee Data</h3>
        <p>Salary: {employeesalary}</p>
        <p>Department: {empdepartment}</p>
      </div>
    );
  }
}
export default App;