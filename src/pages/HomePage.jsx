import React, {useEffect} from "react";
import Footer from "../components/Footer/Footer";
import Posts from "../components/homePublications/Posts";
import style from "../components/filterHome/filterHome.module.css";
import Modals from "../components/modals/Modals";
import Navbar from "../components/Navbar/Navbar";
import Isla from "../components/islaAccesibilidad/islaFlotante";
import LazyLoad from 'react-lazy-load';
import { Accessibility } from 'accessibility/dist/main';

const HomePage = () => {
  useEffect(() => {
    window.addEventListener('load', function () {
      var labels = {
        resetTitle: 'Reset',
        closeTitle: 'Cerrar',
        menuTitle: 'Menu Accesibilidad',
        increaseText: 'Aumentar Texto',
        decreaseText: 'Disminuir Texto',
        increaseTextSpacing: 'Aumentar Espaciado',
        decreaseTextSpacing: 'Disminuir Espaciado',
        increaseLineHeight: 'Aumentar interlineado',
        decreaseLineHeight: 'Disminuir interlineado',
        invertColors: 'Invertir colores',
        grayHues: 'Tonalidad Gris',
        underlineLinks: 'Resaltar links',
        bigCursor: 'Cursor grande',
        readingGuide: 'Guia lectura',
        textToSpeech: 'Text to speech',
        speechToText: 'Speech to text',
        disableAnimations: 'Deshabilitar animaciones'
      };
      var options = {
        labels: labels,
        icon: {
          position: {
            bottom: { size: 50, units: 'px' },
            right: { size: 30, units: 'px' },
            type: 'fixed'
          },
          circular: [true],
        }

      }
      options.textToSpeechLang = 'es-mx'
      options.speechToTextLang = 'es-mx';
      new Accessibility(options);
    }, false);
  }, [])


  return (
    <div className={style.homePage} id="divGeneral">
      <Navbar />
      <LazyLoad threshold={0.95}>
        <div className={style.containBody}>
          <div className={style.mainContent}>
            <div className={style.containFilter}>
            </div>
            <Modals />
            <LazyLoad threshold={0.95}>
              <Posts />
            </LazyLoad>
          </div>
        </div>
      </LazyLoad>
      <Isla />
      <Footer />
    </div>
  );
};

export default HomePage;
