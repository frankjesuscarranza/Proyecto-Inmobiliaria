import "./contenedor.css";

function Contenedor({ children, style }) {
  return (
    <div className="contenedor-listado" style={style}>
      {children}
    </div>
  );
}

export default Contenedor;
