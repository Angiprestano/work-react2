import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Component/MyNav";
import MyFooter from "./Component/MyFooter";
import Welcome from "./Component/Welcome";
// import AllTheBooks from "./Component/AllTheBooks";
import Booklist from "./Component/Booklist";
import scifi from "./Data/scifi.json";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
        <Welcome />
        <Booklist arrayOfBooks={scifi} />
        <MyFooter />
      </header>
    </div>
  );
}

export default App;
