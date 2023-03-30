import babyCare from "../babyCare.png";
import style from "./Navbar.module.css";
import { Input, InputRightAddon, InputGroup } from "@chakra-ui/react";
import { BsCartCheck } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className={style.main}>
      <div className={style.nav_top}>
        <img width={200} src={babyCare} alt="" />
        <div style={{ margin: "5px" }}>
          <InputGroup>
            <Input
              w={400}
              h={8}
              type="text"
              placeholder="Search for a Category, Brand or Product"
            />
            <InputRightAddon h={8} children="Search" />
          </InputGroup>
        </div>
        <div style={{ display: "flex", margin: "5px" }}>
          <p>Support |</p>
          <p>Login/Register |</p>
          <p>Shortlist |</p>
          <BsCartCheck />
          <p>Cart |</p>
        </div>
      </div>
      <div className={style.nav_bot}>
        
      </div>
    </div>
  );
}
