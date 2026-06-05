import {Component} from 'react';

class MyStudentInfo extends Component {
    render() {
        var myname="Lohith Varma";
        var sno=17;
        return (
            <div className="MyData">
                <h3>Hello this is myData class Component</h3>
                <p>Name: {myname}</p>
                <p>Student Number: {sno}</p>
            </div>
        );
    }
}
class MyStudentAddress extends Component {
    render() {
        var hno="269/a";
        var street="M.G.Road";
        var city="Bangalore";
        var pincode=560001;
        return (
            <div className="MyStudentAddress">
                <h3>Hello this is myAddress class Component</h3>
                <p>House No: {hno}</p>
                <p>Street: {street}</p>
                <p>City: {city}</p>
                <p>Pincode: {pincode}</p>
            </div>
        );
    }
}
export{MyStudentAddress};
export default MyStudentInfo;