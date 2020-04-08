import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

const body = document.querySelectorAll('#rbgShiftSlider');

var images = [
  "https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1462486387766-dcf408d34ece?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1350&q=80",
];

export const Rgb = () => {
   window.rbgShiftSlider({
   nav : true,
   navElement: '.scene-nav',
   slideImages: images,
   stageWidth: 1920,
   stageHeight: 1080,
   displacementImage: 'http://hmongouachon.com/_demos/rgbShiftSlider/displace-circle.png',
   fullScreen: true,
   transitionDuration: 0.35, // must be 0.1 > transitionGhostDuration
   transitionGhostDuration : 0.25,
   transitionFilterIntensity: 350,
   transitionSpriteIntensity: 2,
   mouseDispIntensity: 3,
   interactive : true,
   autoPlay : false,
   autoPlaySpeed : 15000,
  })
 }

const RgbShift = () => {
  return (
    <div>
      <div id="rbgShiftSlider" className="rgbShiftSlider" />
      <nav className=".scene-nav">
        <h3>Backgrounds</h3>
        <a onFocus={() => Rgb()} href="#" className="scene-nav prev" data-nav="previous">
          Prev
        </a>
        <a onFocus={() => Rgb()} href="#" className="scene-nav next" data-nav="next">
          Next
        </a>
      </nav>
    </div>
  );
};

export default RgbShift;