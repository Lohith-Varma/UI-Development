import Products from './MyProducts';

function App() {
  return (
    <div className="App">
      <Products></Products>
      <AddNewProducts></AddNewProducts>
    </div>
  );
}


function AddNewProducts() {
  return(
    <div className="AddNewProducts">
      <h3>Add new products</h3>
    </div>
  );
}

export default App;
