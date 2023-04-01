import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import style from "./ProductsContainer.module.css"
function ProductsContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8080/products`
    )
      .then((res) => res.json())
      .then((product) => {
          console.log(product);
          setData(product)
      });
  },[]);
  return (
    <div style={{display:"flex",width:"90%",margin:"auto"}}>
      <div className={style.filter_section}>
        {/* filter sections here */}
      </div>
      <div className={style.product_container}>
        
        {
          
          data?.map((el) =>  ( <ProductCard {...el} />))
        }
      </div>
    </div>
  );
}

export default ProductsContainer;
