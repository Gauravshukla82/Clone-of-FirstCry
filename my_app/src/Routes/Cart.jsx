import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
export default function Cart() {

    const { isAuth, loginUser, logoutUser, token, handleSearch, searchData,handleAddClick, cart } =
        useContext(AuthContext);
    
        console.log(cart.r1)
   
    return (
        <h1>{cart.r1}</h1>
    )
    
    
    
}