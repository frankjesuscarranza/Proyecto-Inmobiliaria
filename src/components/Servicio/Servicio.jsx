import "./servicio.css";

function Servicio(props) {
  return (
    <div className="contenedor-servicio">
      <img className="servicio-imagen" src={props.imagen} alt="imagen" />
      <div className="servicio-titulo">{props.titulo}</div>
      <div className="servicio-descripcion">{props.descripcion}</div>
    </div>
  );
}

export default Servicio;
