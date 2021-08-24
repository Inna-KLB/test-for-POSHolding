import selectCar from "./selectCar";

const showForm = () => {
  const modal = document.querySelector('.modal');
  if(modal.classList.contains('hide')) {
    modal.classList.remove('hide');
    selectCar();
  } else {
    modal.classList.add('hide')
  }
};
export default showForm;