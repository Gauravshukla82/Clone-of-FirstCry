import Navbar from "./Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import FooterPage from "../src/pages/FooterPage"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes />
      <FooterPage/>
    </div>
  );
}

// authentication: reqres.in
//
