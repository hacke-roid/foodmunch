import "./NavigationBar.css";
import ExploreMenu from "./ExploreMenu";
import { Routes, Route, useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();

  const navigateToChoose = () => {
    navigate("/");
  };

  const navigateToExplore = () => {
    navigate("/Explore");
    
  }

  const navigateToDelivery = () => {
    navigate("/DeliveryOption");
  }

  return (
    <div className="container">
      <img alt="logo" className="logo" src={require("../food-munch-img.png")} />
      <div className="nav-bar">
        
        <div>
          <button onClick={navigateToChoose} className="nav">Why Choose Us?</button>
          <button onClick={navigateToExplore} className="nav">Explore Menu</button>
          <button onClick={navigateToDelivery} className="nav">Delivery & Payment</button>
          <button className="nav">Follow us</button>
        
          <Routes>
            <Route
              exact path="/src/components/ExploreMenu.js"
              element={<Route/>}
            
            />
            <Route
              exact path="/src/components/ExploreMenu.js"
              element={<ExploreMenu/>}
            />
          </Routes>
          </div>
        
      </div>
    </div>
  );
}

export default NavigationBar;
