
import './App.css';
import './Home.css';
import './Styles.css'

import Slider from 'react-slick';

import Logo from './gs.svg';
import {Fragment} from "react";

function App() {

  window.addEventListener("scroll", function() {
    var nav = document.getElementById("mainNav");

    if (window.pageYOffset > 30) {  // puedes ajustar este valor según tus necesidades
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Importar todas las imágenes con extensión .JPG de la carpeta 'bi-anterior'
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(require.context('./bi-anterior', false, /\.(JPG)$/));
  console.log(images)


  return (
    <Fragment>
      <nav id="app" className="js-stickybit-parent"  style={{ top: "0px", position: "sticky", zIndex: 100000 }}>
        <div id="mainNav" className="menu-wrapper js-is-sticky js-is-sticky--change">
          <div className="menu-inner">
            <div className="menu-logo">
              <a href="/organizations">
                <img src={Logo}/>
              </a>
            </div>
            <div className="menu-main hide-mobile">
              <ul className="menu-items">

                <li className=""><a href="#bases">Bases</a></li>
                <li className=""><a href="#agenda">Agenda</a></li>
                <li className=""><a href="#dinamica">Dinámica</a></li>
                <li className=""><a href="#bi-2022">BI 2022</a></li>
                <li className=""><a href="#ie">Información Ejecutiva</a></li>
                <li className="buttonStyle"><a href="#">Inscríbete</a></li>

              </ul>
            </div>
            <div className="hide-desktop">

            </div>
            <div className="mobile-menu hide-desktop">
              <div className="close-mobile-menu">×</div>
              <ul className="mobile-menu-main">
                <li className=""><a href="/organizations#assessmentsSection"><h3>Assessments</h3></a></li>
                <li className=""><a href="/organizations#interviewsSection"><h3>Interviews</h3></a></li>
                <li className=""><a href="/organizations#pricing"><h3>Pricing</h3></a></li>
                <li className=""><a href="/organizations#pricing"><h3>Free trial</h3></a></li>
                <li className="mobile-menu-item-highlight"><a href="/sl-org"><h3>Login</h3></a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="section-header">
        <svg width="1440" height="203" className="clipsvg">
          <defs>
            <clipPath id="topbg" clipPathUnits="objectBoundingBox" transform="scale(0.0006944444444, 0.00115000012)">
              <path d="M0.222222 0H1640.22V600C1440.22 600 1244.22 800 360.222 800C87.7222 800 27.7222 750 0.222222 695C-27.2778 640 0.222222 0 0.222222 0Z"></path>
            </clipPath>

          </defs>
        </svg>
        <svg width="1440" height="742" className="clipsvg">
          <defs>
            <clipPath id="footerbg" clipPathUnits="objectBoundingBox" transform="scale(0.0006944444444, 0.001347708895)">
              <path
                  d="M-50.0896 9.166L-50.0895 716.549C-50.0895 716.549 -262.566 778.415 207.394 756.518C529.319 741.518 1163.7 747.518 1448.32 756.518C1504.82 659.684 1592.52 28.766 1491.32 9.166C1390.12 -10.434 928.819 5.96537 710.819 16.6151C411.819 24.0641 -50.0896 9.166 -50.0896 9.166Z"></path>
            </clipPath>
          </defs>
        </svg>


        <div >
          <div className="top-section section">
            <div className="section-inner lg-width ">
              <div className="top-section-text">
                <h1 className="main-title glitch" style={{ margin: ".1rem" }}>BI Challenge 2023</h1>
                {/** <h2 style={{ margin: "0" }}>De los datos a decisiones estratégicas</h2> **/}
                <p className="main-description" style={{ marginTop: "26px", fontSize: "18px"}}>Únete al evento líder de 2023 en Grupo Salinas, donde los analistas más brillantes compiten para presentar el análisis BI más profesional. Descubre, compite y sé testigo de la innovación en analítica de negocios</p>
                <div className="roi-form-wrap">
                  <div className="roi-form">
                    <div className="btn btn-primary btn-lg downloadReportButton" style={{fontSize: "16px" }}>Inscríbete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <section id="bases" className="main">
        <div className="section-content">


          <h1 className="h1-custom">Bases del evento</h1>
          <ul className="ul-custom">
            <li>Únicamente para colaboradores de Grupo Salinas de corporativos de CDMX de todas las unidades de negocio.</li>
            <li>Realizar registro en la página: <a className="a-custom" href="#">X</a></li>

          </ul>

          <h2 className="h2-custom">Datos del evento:</h2>
          <ul className="ul-custom">

          </ul>

          <h2 className="h2-custom">Prerrequisitos</h2>
          <ul className="ul-custom">
            <li>Colaborador interno de grupo salinas</li>
            <li>Estar dentro de los corporativos de la Ciudad de México</li>
            <li>Tener <a href="#">Tableau desktop instalado 2023.1.4</a></li>

          </ul>

          <h2 className="h2-custom">Perfil del participante</h2>
          <ul className="ul-custom">

          </ul>

          <p><strong>DISCLAIMER:</strong> El uso de los datos es confidencial y de uso exclusivo para grupo salinas y para este evento.</p>

        </div>
      </section>
      <section id="agenda" className="main">
        <div className="section-content">
          <h1 className="h1-custom">Agenda BI Challenge 2023</h1>

          <h2 className="h2-custom">8:00 AM - Inicio del evento</h2>
          <ul className="ul-custom">
            <li>Recepción</li>
            <li>Registro de asistencia</li>
            <li>Hostes para que los lleve a sus lugares. Los lugares se asignan previamente.</li>
          </ul>

          <h2 className="h2-custom">8:30 AM</h2>
          <p>Palabras por parte de sponsors (5 min por persona)</p>
          <ul className="ul-custom">
            <li>Laura Cordova</li>
            <li>Alfonso Aguilar (por confirmar)</li>
            <li>Ericka Bertado (por confirmar)</li>
            <li>Laura Sosa</li>
            <li>Gustavo Lacroix (banderazo)</li>
          </ul>
          <p>Un miembro del Staff dará la bienvenida y explicará las bases del evento.</p>

          <h2 className="h2-custom">9:00 AM – 9:45 AM Sorteo y Desayuno</h2>
          <ul className="ul-custom">
            <li>El capitán de cada equipo tomará un sobre que contiene el reto a resolver y las instrucciones para
              lograrlo.
            </li>
            <li>El staff registra el reto que le toco a cada equipo.</li>
            <li>En pantallas transmitir video de como consumir los datos del reto asignado.</li>
          </ul>

          <h2 className="h2-custom">10:00 AM</h2>
          <p>Banderazo de arranque para resolver el reto.</p>

          <h2 className="h2-custom">11:00 AM a 3:30</h2>
          <p>Uso de comodines para resolver dudas</p>

          <h2 className="h2-custom">1:00 PM</h2>
          <p>Comunicado de que esta próxima la hora de la comida y las instrucciones.</p>

          <h2 className="h2-custom">1:30 PM a 2:10</h2>
          <p>Comida (40 minutos)</p>
          <ul className="ul-custom">
            <li>Se invita a los participantes a pasar por su lunch.</li>
            <li>Comunicado 10 min antes de arrancar el evento</li>
            <li>Comunicado de reinicio del evento.</li>
          </ul>

          <h2 className="h2-custom">3:30 a 4:00 PM</h2>
          <ul className="ul-custom">
            <li>Cierre de desarrollo de proyectos</li>
            <li>Inicio de cierre de actividades</li>
            <li>Comunicado de que quedan 30 min en pantallas y contador.</li>
            <li>Comunicar instrucciones para nombrar y publicar el tablero.</li>
          </ul>

          <h2 className="h2-custom">4:00 – 4:30 PM</h2>
          <ul className="ul-custom">
            <li>Cierre oficial del periodo de desarrollo</li>
            <li>Todos los proyectos que se publiquen después de las 4:30 pm se moverán a descalificados.</li>
            <li>Los proyectos publicados en tiempo se evaluarán con los criterios de evaluación para determinar a los
              finalistas.
            </li>
          </ul>

          <h2 className="h2-custom">4:30 PM - 5:15 PM</h2>
          <ul className="ul-custom">
            <li>Anuncio de finalistas</li>
            <li>Los finalistas presentan al jurado</li>
            <li>El jurado toma nota en sus papeletas de criterios de evaluación</li>
          </ul>

          <h2 className="h2-custom">5:10 PM</h2>
          <ul className="ul-custom">
            <li>El staff consolida las papeletas de criterios de evaluación, llenadas previamente por el jurado</li>
            <li>Consolida puntajes</li>
            <li>Delibera los 3 mayores puntajes</li>
            <li>En caso de empate (en puntaje), el jurado decide proyecto acreedor a los 3 primeros lugares</li>
          </ul>

          <h2 className="h2-custom">5:30 PM – Premiación y cierre del evento</h2>
          <ul className="ul-custom">
            <li>Los 3 equipos con mejor puntuación serán los ganadores.</li>
            <li>Se anunciarán en el siguiente orden:</li>
            <ul>
              <li>3er Lugar (Equipo con 3er mejor puntaje)</li>
              <li>2do Lugar (Equipo con segundo mejor puntaje)</li>
              <li>1er Lugar (Equipo con el mejor puntaje)</li>
            </ul>
            <li>Los ganadores deben acceder al templete de premiación a su llamado</li>
            <li>En caso de que uno de los equipos ganadores no esté presente será notificado por correo.</li>
            <li>El jurado procede al reconocimiento y entrega de premios a los equipos ganadores</li>
          </ul>
          <p>Un miembro del Staff dará las palabras de cierre y agradecimiento a todos los participantes.</p>
        </div>

      </section>

      <section id="dinamica" className="main">
        <div className="section-content">
          <h1 className="h1-custom">Dinámica</h1>

          <p>A cada equipo se le asignará un reto el cual deberá resolver en un periodo de 6 horas.</p>
          <p>Cada equipo cuenta con 2 comodines para intercambiarlos por ayuda con el equipo de staff.</p>
          <p>Todos los tableros publicados o modificados después de las 4:30 serán descalificados.</p>
          <p>Los finalistas presentarán su tablero ante el jurado y de ahí saldrán los 3 primeros lugares.</p>

          <h2 className="h2-custom">Premios:</h2>

          <ul className="ul-custom">
            <li>Primer lugar:</li>
            <li>Segundo lugar:</li>
            <li>Tercer lugar:</li>
          </ul>

          <h2 className="h2-custom">Criterios de evaluación:</h2>
        </div>

      </section>

      <section id="bi-2022" className="main ">
        <div className="section-content">
          <h1 className="h2-custom">BI Challenge 2022</h1>
          <Slider {...settings}>
            {images.map((imgSrc, index) => (
                <div key={index}>
                  <img src={imgSrc.default} alt={`${index}`} className="slider-image"/>
                </div>
            ))}
          </Slider>
        </div>
      </section>

    </Fragment>

  );
}

export default App;
