import React from "react";
import Footer from "../components/Footer/Footer";
import Posts from "../components/homePublications/Posts";
import style from "../components/filterHome/filterHome.module.css";
import Modals from "../components/modals/Modals";
import Navbar from "../components/Navbar/Navbar";
import Isla from "../components/islaAccesibilidad/islaFlotante";
import LazyLoad from 'react-lazy-load';
import { Accessibility } from 'accessibility/dist/main';

const HomePage = () => {
  window.addEventListener('load', function() {
    var labels = {
      resetTitle: 'reset (in my language)',
      closeTitle: 'close (in my language)',
      menuTitle: 'title (in my language)',
      increaseText: 'increase text size (in my language)',
      decreaseText: 'decrease text size (in my language)',
      increaseTextSpacing: 'increase text spacing (in my language)',
      decreaseTextSpacing: 'decrease text spacing (in my language)',
      increaseLineHeight: 'increase line height (in my language)',
      decreaseLineHeight: 'decrease line height (in my language)',
      invertColors: 'invert colors (in my language)',
      grayHues: 'gray hues (in my language)',
      underlineLinks: 'underline links (in my language)',
      bigCursor: 'big cursor (in my language)',
      readingGuide: 'reading guide (in my language)',
      textToSpeech: 'text to speech (in my language)',
      speechToText: 'speech to text (in my language)',
      disableAnimations: 'disable animations (in my language)'
  };
    var options = {
      labels: labels ,
      icon: {
        circular: [true/false],
        img: ['accessibility'/'accessible'],
        useEmojis: [true/false],
        position: {

          bottom: { size: 50, units: 'px' },
          
          right: { size: 30, units: 'px' },
          
          type: 'fixed'
          
          },      
      }
      
      }
      options.textToSpeechLang = 'es-mx'
      options.speechToTextLang = 'es-mx'; 
      new Accessibility(options);
      
      
}, false);
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
