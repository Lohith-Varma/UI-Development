function Employee() {
    var firstName = "Lohith";
    var lastName = "Varma";
    var age = 20;
    return (
        <div className = "Employee">
            <h3>This is Employee Import to root component of App.js</h3>
            <h3> Employee Information </h3>
            FirstName : {firstName} <br></br>
            LastName : {lastName} <br></br>
            Age : {age}
        </div>
    )
}

function EmployeeAddress() {
    var city = "Visakhapatnam";
    var state = "Andhra Pradesh";
    return (
        <div className = "EmployeeAddress">
            <h3>Employee Address</h3>
            City : {city} <br></br>
            State : {state} <br></br>
        </div>
    )
}

function EmployeeDepartment() {
    var department  = "Software Developer";
    var company = "Google";
    return (
        <div className = "EmployeeDepartment">
            <h3>Employee Department</h3>
            Department : {department} <br></br>
            Company : {company} <br></br>
        </div>    
    )
}

export {EmployeeAddress};
export {EmployeeDepartment};
export default Employee;