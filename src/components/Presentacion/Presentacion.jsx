import "./presentacion.css";
import background from "/src/assets/images/background/background.jpg";
function Presentacion(props) {
  const { style } = props;
  return (
    <div className="contenedor-presentacion">
      <img src={background} alt="Barcelona" />
      <div className="texto-presentacion" style={style}>
        {props.texto}
      </div>
    </div>
  );
}

export default Presentacion;
