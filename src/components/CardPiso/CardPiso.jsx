import "./cardpiso.css";
import Carousel from "../Carousel/Carousel";
import ascensor from "../../assets/images/iconos/ascensor.png";
import cama from "../../assets/images/iconos/cama.png";
import ducha from "../../assets/images/iconos/ducha.png";
import whatsapp from "../../assets/images/iconos/whatsapp.png";
import email from "../../assets/images/iconos/email.png";

// function CardPiso(titulopiso, numhabs, numwc, descripcion) {

function CardPiso() {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div className="card">
      <div className="foto-card">
        <Carousel slides={slides} />
      </div>
      <div className="info-card">
        <div className="title">Corsega 603</div>
        <div className="logos">
          <ul>
            <li>
              <img src={cama} /> 4 habs. (2 doble)
            </li>
            <li>
              <img src={ducha} /> 3 baños completos
            </li>
            <li>
              <img src={ascensor} /> Ascensor incorporado
            </li>
          </ul>
        </div>
        <div className="card-texto">
          Piso compartido ubicado en Calle Corsega 603 a 6min de Sagrada
          familia, compuesto de salon - comedor luminoso con un pequeño balcón,
          cocina amplia equipada, lavadora y secadora, 3 baños completos mas un
          lavamanos extra, tiene 4 habitaciones 2 dobles y 2 individuales, todas
          equipadas con escritorio y silla, con todo lo necesario para descansar
          y tener una magnifica estadía.
        </div>
        <div className="card-contacto">
          <button className="btn-contacto">
            <img src={email} />
            Contactar
          </button>
          <button className="btn-contacto">
            <img src={whatsapp} />
            Envia un WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPiso;
