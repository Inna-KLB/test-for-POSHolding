const showForm = () => {
  const modal = document.querySelector('.modal');
  if(modal.classList.contains('hide')) {
    modal.classList.remove('hide')
  } else {
    modal.classList.add('hide')
  }
};
export default showForm;