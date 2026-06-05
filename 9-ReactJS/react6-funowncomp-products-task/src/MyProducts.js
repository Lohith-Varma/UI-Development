function Products() {
    var pid = 1001
    var pname = "SC Project Exhaust"
    var price = 200000

    return (
        <div className="Products">
            <h3>Details: </h3>
            Id: {pid} <br></br>
            Name: {pname} <br></br>
            Price: {price} <br></br>
        </div>
    );
}

export default Products;