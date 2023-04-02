import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [searchData, setSearchData] = React.useState([]);
  const [cart, setCart] = React.useState({});

  const handleSearch = (search) => {
    fetch(`https://powerful-blue-smock.cyclic.app/products?q=${search}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product);
      setSearchData(product);
    });
  }

  const handleAddClick = (data) => {
    let cartData = {
      image: data[0]?.image,
      title: data[0]?.title,
      price: data[0]?.r1,
      quantity:1,
    }
    // localStorage.setItem('cartItem', JSON.stringify(cartData));
    setCart(cartData)
    // setInCart(!inCart);

    // setTimeout(() => {
    //   return <Link to="./cart"/>
    // }, 1000);

    
  }


  const loginUser = (token) => {
    setIsAuth(true);
    setToken(token);
  };

  const logoutUser = () => {
    setIsAuth(false);
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, loginUser, logoutUser, token,handleSearch,searchData,handleAddClick, cart }}>
      {children}
    </AuthContext.Provider>
  );
}
