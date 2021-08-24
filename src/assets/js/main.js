import selectCar from "./modules/selectCar";
import createSquares from "./modules/createSquares";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const squareSection = document.querySelector('.square-section'),
        circleSection = document.querySelector('.circle-section');
        
  createSquares(squareSection, circleSection);
  selectCar();
});
