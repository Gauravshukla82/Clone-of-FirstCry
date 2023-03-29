import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
function ProductsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`
    )
      .then((res) => res.json())
      .then((product) => {
          console.log(product);
          setData(product.data)
      });
  },[]);
  return (
    <table border="1px">
      <thead>
        <tr>
          <th>Sno</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* map through the data */}
              {data.map((item) => {
                 return <ProductCard brand={item.brand} category={item.category} price={item.price} id={item.id} />
            
        })}
      </tbody>
    </table>
  );
}

export default ProductsTable;
