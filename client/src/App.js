// import './App.css';
import Navbar from "./components/Navbar";
function App() {
  return (
  <>
  <Navbar />
  {[...new Array(122)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
  </>
  );
}

export default App;
