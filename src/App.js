import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Component/MyNav";
import MyFooter from "./Component/MyFooter";
import Welcome from "./Component/Welcome";
import AllTheBooks from "./Component/AllTheBooks";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
        <Welcome />
        <MyFooter />
        <AllTheBooks />
      </header>
    </div>
  );
}

export default App;
