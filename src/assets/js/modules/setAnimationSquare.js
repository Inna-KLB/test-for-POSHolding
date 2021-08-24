const setAnimationSquare = () => {
  const squareTopLeft = document.querySelector('.square_top-left'),
        squareTopRight = document.querySelector('.square_top-right'),
        squareBottomLeft = document.querySelector('.square_bottom-left'),
        squareBottomRight = document.querySelector('.square_bottom-right');

  squareTopLeft.style.animationName = 'top-left';
  squareTopRight.style.animationName = 'top-right';
  squareBottomLeft.style.animationName = 'bottom-left';
  squareBottomRight.style.animationName = 'bottom-right';
  
  setTimeout(() => {
    squareTopLeft.remove();
    squareTopRight.remove();
    squareBottomLeft.remove();
    squareBottomRight.remove();
  }, 4000);
};
export default setAnimationSquare;