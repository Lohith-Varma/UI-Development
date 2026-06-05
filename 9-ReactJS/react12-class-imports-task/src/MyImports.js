import {Component} from 'react';
class MyEmployee extends Component{
  render() {
    var employeeName="Lohith Varma";
    var empId=517;
    return (
      <div className="MyEmployee">

        <h3>Hello this is myEmployee class Component</h3>
        Employee Name: {employeeName}<br></br>
        Employee ID: {empId}<br></br>
      </div>
    );
  }
}
class EmployeeAddress extends Component{
  render() {
    var hno="269/a";
    var street="M.G.Road";
    var city="Bangalore";
    var pincode=560001;
    return (
        <div className="EmployeeAddress">
            <h3>Hello this is myAddress class Component</h3>
            <p>House No: {hno}</p>
            <p>Street: {street}</p>
            <p>City: {city}</p>
            <p>Pincode: {pincode}</p>
        </div>
    );
  }
}
export{EmployeeAddress};
export default MyEmployee;