import { Link } from "react-router-dom";
import style from "./ProductsContainer.module.css";
export default function ProductCard({
  id,
  image,
  title,
  r1,
  r2,
  R12_red,
  r1_2,
  L12_42,
  M12_42,size,
}) {
  return (
    <div className={style.product_card}>
      <img src={image} alt="" />
      <button className={style.add_cart}>Add to cart</button>
      
      <p
        style={{
          fontSize: "12px",
          color: "#282828",
          fontWeight: "bold",
          margin: "10px 0px 5px 0px",
        }}
      >
        {title}
      </p>
      <div
        style={{ display: "flex", margin: "4px 5px 7px 0px", color: "#575757" }}
      >
        <p style={{ fontSize: "14px", fontWeight: "bold", marginRight: "8px" }}>
          ₹ {r1}
        </p>
        <p className={style.cut_rate}>₹ {r2}</p>
        <p className={style.offer_onPrice}>{R12_red}</p>
      </div>
      <div style={{display:"flex",margin:"auto"}}>
        <img
          src="https://cdn.fcglcdn.com/brainbees/images/club_flag_listing_desktop.png"
          alt=""
        />
        <p style={{ fontSize: "12px" }}>Club Price: ₹ {r1_2}</p>
      </div>
      <p style={{ fontSize: "12px", margin: "5px 0px 0px 0px " }}>{L12_42} <b> {M12_42} </b> </p>
      
    </div>
  );
}
