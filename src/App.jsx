import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="header-container">
          <Navbar />
          <div className="row">
            <div className="col">
              <h1>Be Confident</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi repellendus et eaque totam nesciunt quibusdam eos aliquid nihil odio! Provident accusantium eveniet quis cupiditate reiciendis fugiat cumque, suscipit sint eum.</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
