import React from 'react'
import { Accessibility } from 'accessibility/dist/main';


export default function Acces(){
    
    return(
        <>
        { window.addEventListener('load', function() {
        var options = {
          icon: {
          
          circular: [true/false],
          
          img: ['accessibility'/'accessible'],
          
          }
          
          }
          
          new Accessibility(options);
          
          
    }, false)};
        </>
    )
  
}