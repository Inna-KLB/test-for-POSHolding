import getData from "../services/getData";
const selectCar = () => {
  const form = document.querySelector('.form'),
        selectMark = form.querySelector('#mark'),
        selectModel = form.querySelector('#model'),
        selectYear = form.querySelector('#year');
  getData()
  .then(res => {
    let cars = res['cars'];
    let marks = [];
    for(let i = 0; i < cars.length; i++) {
      marks.push(`${cars[i].mark}`);
    }
    let sortMarks = [...new Set(marks)];

    for(let i = 0; i < sortMarks.length; i++) {
      const option = document.createElement('option');
      option.setAttribute('value', `${sortMarks[i]}`);
      option.innerHTML = `${sortMarks[i]}`;        
      selectMark.append(option);
    }
  })
};
export default selectCar;