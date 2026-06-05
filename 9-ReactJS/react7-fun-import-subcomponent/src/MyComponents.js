function MyFunction() {
    var firstName = "Lohith";
    var lastName = "Varma";
    var age = 20;
    return (
        <div className = "MyFunction">
            <h3>This is myFunction Import to root component of App.js</h3>
            <h3> Person Information </h3>
            FirstName : {firstName} <br></br>
            LastName : {lastName} <br></br>
            Age : {age}
        </div>
    )
}

function MyData() {
    var name = "NSRIT";
    return (
        <div className = "MyData">
            <h3>College Information</h3>
            Name : {name}<br></br>
        </div>
    ) 
}

function MyChildFunction() {
    return (
        <div className = "MyChildFunction">
            <h3>This is MyChildFunction import to root component of App.js</h3>
        </div>
    )
}

export {MyData};
export {MyChildFunction};
export default MyFunction;