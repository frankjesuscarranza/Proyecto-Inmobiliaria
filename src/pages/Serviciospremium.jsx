import Contenedor from "../components/Contenedor/Contenedor";
import Tituloysub from "../components/Tituloysub/Tituloysub";
import Servicio from "../components/Servicio/Servicio";
import limpieza from "../assets/images/iconos/limpieza.png";
import inmediata from "../assets/images/iconos/asistencia.png";
import asistencia24 from "../assets/images/iconos/24.png";
import internet from "../assets/images/iconos/internet.png";
import emergencia from "../assets/images/iconos/emergencia.png";
import Footer from "../components/Footer/Footer";

function Serviciospremium() {
  return (
    <>
      <Tituloysub titulo="Servicios " />
      <Contenedor style={{ display: "flex", flexWrap: "wrap" }}>
        <Servicio
          imagen={inmediata}
          titulo="Asistencia inmediata"
          descripcion="Servicio de asistencia ininterrumpido, operativo las 24 horas, todos los días, garantizando una solución rápida a toda clase de problemas que pudieran suceder. Cada intervención se realiza en un entorno seguro y respetuoso, priorizando la asistencia de nuestro personal femenino.
"
        />
        {/* <Servicio
          imagen={emergencia}
          titulo="Asistencia de emergencia"
          descripcion="Contamos con personal capacitado en cada área necesaria frente a una emergencia, limpieza, fontanería, electricidad, cambio de cerradura, etc.
"
        /> */}
        <Servicio
          imagen={limpieza}
          titulo="Limpieza semanal"
          descripcion="Nuestro equipo de limpieza, entrenado y comprometido, garantiza un mantenimiento impecable de las viviendas.
"
        />
        <Servicio
          imagen={asistencia24}
          titulo="Disponibilidad 24h 365"
          descripcion="Los estudiantes son nuestra prioridad, por eso ofrecemos un servicio de 24h para toda asistencia que sea necesaria."
        />
        <Servicio
          imagen={internet}
          titulo="Conexión a Internet"
          descripcion="Internet de alta velocidad"
        />
      </Contenedor>
      <Footer />
    </>
  );
}

export default Serviciospremium;
