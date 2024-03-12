import "./global.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Presentacion from "./components/Presentacion/Presentacion.jsx";
import ListadoPiso from "./components/ListadoPisos/Listadopiso.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Presentacion />
      <ListadoPiso />
    </>
  );
}

export default App;
