// import './App.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Login />
      <div style={{ opacity: 0.5, backgroundColor: "#000" }}>
        <Navbar />
        <Main />
      </div>
    </>
  );
}

export default App;
