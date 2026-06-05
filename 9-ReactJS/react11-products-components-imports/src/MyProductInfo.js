import {Component} from 'react';
class MyProductInfo extends Component{
  render() {
    var productName="Laptop";
    var pno=123;
    return (
      <div className="MyProductInfo">
        <h3>Hello this is myProductInfo class Component</h3>
        Product Name: {productName}<br></br>
        Product Number: {pno}<br></br>
      </div>
    );
  }
}
class CustomerAddress extends Component{
  render() {
    var hno="269/a";
    var street="M.G.Road";
    var city="Bangalore";
    var pincode=560001;
    return (
        <div className="CustomerAddress">
            <h3>Hello this is myAddress class Component</h3>
            <p>House No: {hno}</p>
            <p>Street: {street}</p>
            <p>City: {city}</p>
            <p>Pincode: {pincode}</p>
        </div>
    );
  }
}
export{CustomerAddress};
export default MyProductInfo;