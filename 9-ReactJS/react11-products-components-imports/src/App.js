import MyProductInfo from './MyProductInfo';
import{Component} from 'react';
import{CustomerAddress} from './MyProductInfo';
class App extends Component{
  render() {
    return (
      <div className="App">
        <h1> Welcome to ReactJS Class Products Components</h1>
        <MyData></MyData>
        <MyProductInfo></MyProductInfo>
        <CustomerAddress></CustomerAddress>
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