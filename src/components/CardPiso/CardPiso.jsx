import "./cardpiso.css";
import { Carousel } from "flowbite-react";

function CardPiso() {
  return (
    <div className="card">
      <div className="foto-card">FOTO</div>
      <div className="info-card">TEXTO</div>
      <Carousel />
    </div>
  );
}

export default CardPiso;
