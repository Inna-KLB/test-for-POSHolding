import createCircle from "./createCircle";

const setAnimationSquare = (containerSquare, containerCircle) => {
  const squareTopLeft = document.querySelector('.square_top-left'),
        squareTopRight = document.querySelector('.square_top-right'),
        squareBottomLeft = document.querySelector('.square_bottom-left'),
        squareBottomRight = document.querySelector('.square_bottom-right');
 
// Значения сторон горизонтальной и вертикальной
  let horizontalSide = squareTopLeft.getBoundingClientRect().left,
      verticalSide = squareTopLeft.getBoundingClientRect().top;  

  // Считаем коэффициент сторон
  let coefficient = (horizontalSide > verticalSide) ?  horizontalSide/verticalSide :  verticalSide/horizontalSide;

  let timer = setInterval(() => {
    // Высчитываемколичество пикселей для каждого шага анимации
    horizontalSide = (horizontalSide > verticalSide) ? (horizontalSide - coefficient) : (horizontalSide - 1);
    verticalSide = (horizontalSide > verticalSide) ? verticalSide - 1 : verticalSide - coefficient;

    // Анимация для верхнего левого квадрата
    squareTopLeft.style.position = 'absolute';
    squareTopLeft.style.left = horizontalSide - coefficient +'px';
    squareTopLeft.style.top = verticalSide - 1 +'px';

    // Анимация для верхнего правого квадрата
    squareTopRight.style.position = 'absolute';
    squareTopRight.style.right = horizontalSide - coefficient +'px';
    squareTopRight.style.top = verticalSide - 1 +'px';

    // Анимация для нижнего левого квадрата
    squareBottomLeft.style.position = 'absolute';
    squareBottomLeft.style.left = horizontalSide + coefficient +'px';
    squareBottomLeft.style.bottom = verticalSide + 1 +'px';

    // Анимация для нижнего правого квадрата
    squareBottomRight.style.position = 'absolute';
    squareBottomRight.style.right = horizontalSide - coefficient +'px';
    squareBottomRight.style.bottom = verticalSide + 1 +'px';

    // При скрытии элементов прекращается анимация, удаляются элементы и появляется круг с надписью
    if (squareTopLeft.getBoundingClientRect().left < -150 && squareTopLeft.getBoundingClientRect().top < -150 ) {
      clearInterval(timer);
      squareBottomRight.remove();
      squareTopLeft.remove();
      squareTopRight.remove();
      squareBottomLeft.remove();
      createCircle(containerSquare, containerCircle);

    }
  }, 10);

};
export default setAnimationSquare;