import { Link } from "react-router-dom";
import style from "./Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
function Home() {
  const [data, setData] = useState([]);

  function fetchAndRender() {
    return axios.get(`http://localhost:8080/home`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }

  useEffect(() => {
    fetchAndRender();
  }, []);

  return (
    <div>
      {/* <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link> */}

      <div>
        <img
          style={{ display: "flex", margin: "auto" }}
          src="https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_toys_27th1679664768981.webp"
          alt=""
        />
      </div>
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <h1 style={{ textAlign: "center", padding: "20px", fontSize: "20px" }}>
          PREMIUM BOUTIQUES
        </h1>
        <div>
          <div className={style.product_cards}>
            {data?.map((el) => (
              <div style={{backgroundColor: "white",borderRadius:"10px"}}>
                <img
                  src={el.image}
                  style={{ width: "399px", margin: "auto" }}
                />
                <div style={{padding:"10px"
                }}>

                <p style={{marginTop:"15px"}}>{el.title1}</p>
                <div style={{display:"flex"}}>
                  <p style={{marginTop:"7px",fontSize:"14px",color:"grey" }}>{el.title2}</p>
                  <Button style={{color:"red",fontSize:"11px" ,backgroundColor:"white",display:"flex" ,justifyContent:"end"}}>{el.newtag}</Button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className={style.view_all_btn}>View All Boutiques</button>
          <button className={style.view_all_btn}>
            View All Premium Brands
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
