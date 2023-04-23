import "../components/ExploreMenu.css";

function MenuBar({ image, title }) {
  
  return (
    <div className="card">
      <form className="align-item">
        <img src={image} alt="restro" className="image"  />

        <h2>{title}</h2>
      </form>
    </div>
  );
}

export default MenuBar;
