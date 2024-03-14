import Presentacion from "../components/Presentacion/Presentacion";
import Tituloysub from "../components/Tituloysub/Tituloysub";
import Formulario from "../components/Formulario/Formulario";
import Footer from "../components/Footer/Footer";

function Contacto() {
  return (
    <>
      <Presentacion texto="Contacto" style={{ fontSize: "70px" }} />
      <Tituloysub
        titulo="Contacta con Nosotros"
        subt="Ademas de administrar el piso para los estudiantes, damos un servicio premium para ellos, siempre velando por su seguridad y comodidad en la estancia.
"
      />
      <Formulario />
      <Footer />
    </>
  );
}

export default Contacto;
