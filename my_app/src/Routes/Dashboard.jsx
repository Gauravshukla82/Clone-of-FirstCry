import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductsContainer from "../Components/ProductsContainer";


function Dashboard() {
  const { token,isAuth,logout} = useContext(AuthContext)
  return (
    <div>
      <h3>Dashboard</h3>
      {/* <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:{token}
          <b data-testid="user-token"></b>
        </p>
      </div> */}
      <div>
        {/* Products table */}
        <ProductsContainer />
      </div>
    </div>
  );
}

export default Dashboard;
