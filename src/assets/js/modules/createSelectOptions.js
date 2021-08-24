const createSelectOptions = (carsArray, select, parameter, text) => {
  let carsParameters = [];

    // Перебираем все марки, модели и годы машин в соответствующие массивы
    for(let i = 0; i < carsArray.length; i++) {  
      carsParameters.push(`${carsArray[i][parameter]}`);
    }

    // Убираем дубликаты значений в массивах
    let sortParameters = [...new Set(carsParameters)];

    // Вставялем значения массивов в options
    for(let i = -1; i < sortParameters.length; i++) {
      const option = document.createElement('option');
      if (i === -1) {
        option.textContent = `${text}`;   
      } else {
        option.setAttribute('value', `${sortParameters[i]}`);
        option.innerHTML = `${sortParameters[i]}`;        
      }
      select.append(option);    
    }
};
export default createSelectOptions;