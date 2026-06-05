import './App.css';
import Employee from './MyEmployees';
import { EmployeeAddress} from './MyEmployees'
import { EmployeeDepartment } from './MyEmployees';

function App() {
  const mystyle = {
    margin: "28px",
    padding: "28px",
    boxSizing: "border-box",
    borderRadius: "10px",
    boxShadow:'0 8px 20px #ddd'
  }
  return (
    <div className="App">
      <div style={mystyle}>
        <Employee></Employee>
        <EmployeeAddress></EmployeeAddress>
        <EmployeeDepartment></EmployeeDepartment>
      </div>
    </div>
  );
}

export default App;
