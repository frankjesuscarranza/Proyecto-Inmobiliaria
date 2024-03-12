import "./presentacion.css";
import background from "/src/assets/images/background/background.jpg";
function Presentacion() {
  return (
    <div className="contenedor-presentacion">
      <img src={background} alt="Barcelona" />
      <div className="texto-presentacion">Alquila tu piso</div>
    </div>
  );
}

export default Presentacion;
