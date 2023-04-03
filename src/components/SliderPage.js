import { useState } from "react";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import "./SliderPage.css";

function SliderPage() {
    const [showSlide, setShowSlide] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleFirstSlide = () => {
    console.log("clicked First slide");
  };

  const handleCreate = () => {
    setShowSlide(false);
  }

  const handleSecondSlide = () => [console.log("clicked second slide")];

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <button onClick={handleFirstSlide}>
          <FirstSlide onCreate={handleCreate}/>
        </button>
        <button onClick={handleSecondSlide}>
          <SecondSlide onCreate={handleCreate}/>
        </button>
      </form>
    </div>
  );
}

export default SliderPage;
