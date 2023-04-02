import babyCare from "../babyCare.png";
import style from "./Navbar.module.css";
import {Link} from "react-router-dom"
import {
  Input,
  InputRightAddon,
  InputGroup,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  Box,
  AccordionPanel,
} from "@chakra-ui/react";
import { BsCartCheck } from "react-icons/bs";
import Category from "./Category";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const {isAuth, loginUser, logoutUser, token,handleSearch,searchData}=useContext(AuthContext);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }
  const handleClick = () => {
    handleSearch(search)
    navigate("/dashboard");
  }


 
 
 
 
  return (
    <div className={style.main}>
      <div className={style.nav_top}>
        <Link to="/">
        <img width={200} src={babyCare} alt="" />
        </Link>
        <div style={{ margin: "5px" }}>
          <InputGroup>
            <Input
              w={400}
              h={8}
              type="text"
              onChange={handleChange}
              placeholder="Search for a Category, Brand or Product"
            />
            <InputRightAddon onClick={handleClick} h={8} children="Search" />
          </InputGroup>
        </div>
        <div style={{ display: "flex", margin: "5px" }}>
          <p>Support |</p>
          <Link to="/signup">
          <p>Login/Register |</p>
          </Link>
          <p>Shortlist |</p>
          <BsCartCheck />
          <p>Cart |</p>
        </div>
      </div>
      <div className={style.nav_bot}>
        {/* Category here */}
        <Accordion allowToggle>
          <AccordionItem border="none">
            <h2>
              <AccordionButton
                _expanded={{ bg: "tomato", color: "white" }}
                w="200px"
                marginLeft="100px"
              >
                <Box as="span" flex="1" padding="5px" fontWeight="bold">
                  All Category
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Category />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
