import React, { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./SingleProductPage.css";
import club from "./club.png";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

function SingleProductPage({}) {
  const [data, setData] = React.useState([]);
  
  const { id } = useParams();
  const [inCart, setInCart] = useState(false);
  const [inWishList, setInWishList] = useState(false);
  const { isAuth, loginUser, logoutUser, token, handleSearch, searchData,handleAddClick, cart } =
  useContext(AuthContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`https://powerful-blue-smock.cyclic.app/products?id=${id}`).then((response) => {
      setData(response.data);
      // console.log(response);
    });
  }, [id]);

  let cartItem = JSON.parse(localStorage.getItem('cartItem')) || [];
  // console.log(cartItem);
  const handleAddClick1 = () => {
    // let cartData = {
    //   image: data[0]?.image,
    //   title: data[0]?.title,
    //   price: data[0]?.r1,
    //   quantity:1,
    // }
    
    // setCart(cartData)
    // setInCart(!inCart);
    handleAddClick(data)

  

    
  }
  const handleWishClick = () => {
    setInWishList(!inWishList);
  }


  return (
    <div className="product_page_container">
      <div className="product_left_container">
        <img
          style={{ width: "78%", margin: "auto" }}
          src={data[0]?.image}
          alt=""
        />
        <div>
          <Link to="./signup">
          <button className="add_to_cart" disabled={inCart==true} onClick={handleAddClick1}>{inCart ?"GO TO CART" :"ADD TO CART"}</button>
          </Link>
          <button
            className="add_to_cart"
            style={{ background: "white", color: "black" }}
            onClick={handleWishClick}
          >
            {inWishList?"ADDED TO WISHLIST":"WISHLIST"}
          </button>
        </div>
      </div>
      <div className="product_right_container">
        <h1
          style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}
        >
          {data[0]?.title}
        </h1>
        <hr />
        <div
          style={{
            display: "flex",
            margin: "4px 5px 7px 0px",
            color: "#575757",
          }}
        >
          <p
            style={{ fontSize: "20px", fontWeight: "800", marginRight: "15px" }}
          >
            ₹ {data[0]?.r1}
          </p>
          <p className="cut_rate">MRP: {data[0]?.r2}</p>
          <p className="offer_onPrice">{data[0]?.R12_red}</p>
        </div>
        <p style={{ fontSize: "13px", marginBottom: "15px", color: "#616161" }}>
          MRP incl. all taxes
        </p>
        <img src={club} width="380px" alt="" />
        <div
          style={{
            border: "1px solid rgb(218, 211, 211)",
            width: "368px",
            marginLeft: "4px",
            borderRadius: "5px",
            fontSize: "14px",
            padding: "5px",
            background: "rgb(224, 211, 103)",
            color: "#424242",
            fontWeight: "bold",
          }}
        >
          {data[0]?.lft}
        </div>
      </div>
    </div>
  );
}
export default SingleProductPage;
