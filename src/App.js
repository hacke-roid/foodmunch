import BannerImg from "./components/BannerImg";
import ExploreMenu from "./components/ExploreMenu";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
     <NavigationBar/>
     </BrowserRouter>
     <BannerImg/>
     <ExploreMenu/>
     <ExploreMenu/>
    </div>
  );
}

export default App;
