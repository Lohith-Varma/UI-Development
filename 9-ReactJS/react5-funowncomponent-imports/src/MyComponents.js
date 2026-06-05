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
    );
}

export default MyFunction;