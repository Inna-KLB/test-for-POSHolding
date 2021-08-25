import createSquares from "./createSquares";

const closeForm = (mark, model, year, delivery) => {
  const modal = document.querySelector('.modal'),
        circle = document.querySelector('.circle'),
        circleSection = document.querySelector('.circle-section'),
        squareSection = document.querySelector('.square-section');

  // При закрытии формы появляется надпись о выборе пользователя
  modal.classList.add('hide');
  circle.remove();
  let text = document.createElement('div');
  text.classList.add('text-delivery');
  text.innerHTML = `
    <p>Вы выбрали ${mark} ${model} ${year}, доставка ${delivery}.</p>
    <button class="start">Начать заново</button>
    `;
  circleSection.append(text);
  
  // При нажатии на кнопку появляется стартовая страница с квадратами
  const btnStart = document.querySelector('.start');
  btnStart.addEventListener('click', () => {
    createSquares(squareSection, circleSection);
    text.remove();
  });


};
export default closeForm;