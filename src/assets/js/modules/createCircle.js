import showForm from "./showForm";

const createCircle = (containerSquare, containerCircle) => {
  containerSquare.style.display = 'none';
  const circle = document.createElement('div');
  circle.classList.add('circle');
  const circleText = document.createElement('span');
  circleText.textContent = 'Нажать';
  circleText.classList.add('circle__text');
  circle.prepend(circleText)
  containerCircle.append(circle);
  
  circle.style.animationName = 'rotate-circle';
  setTimeout(() => {
    circleText.addEventListener('click', () => {
      showForm();
    });
  }, 4000);
};
export default createCircle;