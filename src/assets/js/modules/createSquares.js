// import setAnimationSquare from "setAnimationSquare";
import createCircle from "./createCircle";
import setAnimationSquare from "./setAnimationSquare";

const createSquares = (containerSquare, containerCircle) => {
  containerCircle.classList.add('hide');
  containerSquare.classList.remove('hide');
  
  const firstSquare = document.createElement('div');
    firstSquare.classList.add('square', 'square_top-left');
    containerSquare.append(firstSquare);

    const secondSquare = document.createElement('div');
    secondSquare.classList.add('square', 'square_top-right');
    containerSquare.append(secondSquare);

    const thirdSquare = document.createElement('div');
    thirdSquare.classList.add('square', 'square_bottom-left');
    containerSquare.append(thirdSquare);

    const fourthSquare = document.createElement('div');
    fourthSquare.classList.add('square', 'square_bottom-right');
    containerSquare.append(fourthSquare);
     
    setAnimationSquare();
    setTimeout(() => {
      createCircle(containerSquare, containerCircle);
    }, 4000);
};
export default createSquares;