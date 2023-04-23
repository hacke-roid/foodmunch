import MenuBar from "../reusable/MenuBar";
import "./ExploreMenu.css";

function ExploreMenu() {
  return (
    <div style={{ marginTop: '30px'}}>
    <h1 className="containers">Explore Menu</h1>
    <div className="containers">
        <MenuBar image={require('../1(1).png')} title="Non veg Starters"/>
      <MenuBar image={require('../1(1).png')} title="veg Starters"/>
      <MenuBar image={require('../1(1).png')} title="Soups"/>
      <MenuBar image={require('../1(1).png')} title="Fish & Sea Foods"/>
      
    </div>
    </div>
  );
}

export default ExploreMenu;
