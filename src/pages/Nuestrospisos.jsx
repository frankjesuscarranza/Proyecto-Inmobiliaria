import Presentacion from "../components/Presentacion/Presentacion";
import ListadoPiso from "../components/Contenedor/Contenedor";
import CardPiso from "../components/CardPiso/CardPiso";
import Footer from "../components/Footer/Footer";

function Nuestrospisos() {
  return (
    <>
      <Presentacion texto="Alquiler Temporal" />
      <ListadoPiso>
        <CardPiso />
        <CardPiso />
        <CardPiso />
      </ListadoPiso>
      <Footer />
    </>
  );
}

export default Nuestrospisos;
