import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import style from "./ProductsContainer.module.css";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function ProductsContainer() {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [offset,setOffset]=useState([]);
  const { isAuth, loginUser, logoutUser, token, handleSearch, searchData,cart } =
    useContext(AuthContext);
    const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://powerful-blue-smock.cyclic.app/products`)
      .then((res) => res.json())
      .then((product) => {
        // console.log(product);
        setData(product);
      });
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   fetch(
  //     `https://powerful-blue-smock.cyclic.app/products?_offset=${offset}&_limit=24`
  //   )
  //     .then((res) => res.json())
  //     .then((product) => {
  //         console.log(product);
  //         setData(pre=>[...pre,...product])
  //     });
  // }, [offset]);

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     const scrollHeight = e.target.documentElement.scrollHeight
  //     const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
  //     if (currentHeight + 1 >= scrollHeight) {
  //       setOffset(offset + 24)
  //     }
  //   }
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll",handleScroll)
  // },[offset])


 
  const sortChange = (e) => {
    let sortVal = e.target.value;
    console.log(sortVal)
    let sortedData;
    if (sortVal == "Low To High") {
       sortedData = data.sort((a, b) => Number(a.r1) - Number(b.r1))
    } else if (sortVal == "High To Low") {
      sortedData = data.sort((a, b) => Number(b.r1) - Number(a.r1))
    } else {
      sortedData = data;
    }
  
console.log(sortedData)
    setSortedData(sortedData)
    navigate("/dashboard")
  }



  // {searchData == [] ? (
  //   data.map((el) => <ProductCard {...el} key={el.id} />)
  // ): (
  //     searchData.map((el) => (<ProductCard {...el} key={el.id} />) )
   
  // ) }

  return (
    <div style={{ display: "flex", width: "90%", margin: "auto" }}>
      <div className={style.filter_section}>{/* filter sections here */}
        <select name="" id="" onChange={sortChange}>
          <option value="">Sort By Price</option>
          <option value="High To Low">High To Low</option>
          <option value="Low To High">Low To High</option>
      </select>
      
      
      </div>
      <div className={style.product_container}>
        
         {/* { data.map((el) => <ProductCard {...el} key={el.id} />)} */}
       

{searchData.length == 0 ? (
    data.map((el) => <ProductCard {...el} key={el.id} />)
  ): (sortedData.length!=0)? sortedData.map((el)=>(<ProductCard {...el} key={el.id} />)):(
      searchData.map((el) => (<ProductCard {...el} key={el.id} />) )
   
  ) }
         
      </div>
    </div>
  );
}

export default ProductsContainer;
