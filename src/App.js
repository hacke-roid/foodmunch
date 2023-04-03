import FirstSlidePage from "./components/FirstSlidePage";
import SliderPage from "./components/SliderPage";

function App() {
  return (
    <div>
      <SliderPage />
      <FirstSlidePage click={click}/>
    </div>
  );
}

export default App;
