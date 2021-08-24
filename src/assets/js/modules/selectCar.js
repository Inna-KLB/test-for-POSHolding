import getData from "../services/getData";
import closeForm from "./closeForm";
import createSelectOptions from "./createSelectOptions";

const selectCar = () => {
  const selectMark = document.querySelector('#mark'),
        selectModel = document.querySelector('#model'),
        selectYear = document.querySelector('#year'),
        btn = document.querySelector('.form__btn');

  let sortCarsByMark = [],
      sortCarsByModel = [],
      markIndex,
      modelIndex,
      yearIndex,
      selectedMark,
      selectedModel,
      selectedYear;
  
  // Обновляем select, чтобы сбросить предыдущие выбранные значения
  selectMark.length = 0;  
  selectModel.length = 0;
  selectYear.length = 0;
  
  // Получаем данные с json файла
  getData()
  .then(res => {
    let cars = res['cars'];
    // Создаем options в каждом select
    createSelectOptions(cars, selectMark, 'mark', 'Выберите марку автомобиля');
    createSelectOptions(cars, selectModel, 'model', 'Выберите модель автомобиля');
    createSelectOptions(cars, selectYear, 'year', 'Выберите год выпуска');

    // При изменении значения марки авто обновляются последующие selects
    selectMark.addEventListener('change', () => {
      sortCarsByMark = [];
      markIndex = selectMark.options.selectedIndex,
      selectedMark = selectMark.options[markIndex].value;

      for(let i = 0; i < cars.length; i++) {
        if (cars[i].mark === selectedMark) {
          sortCarsByMark.push(cars[i]);
        }
      }
      selectModel.length = 0;
      selectYear.length = 0;
      createSelectOptions(sortCarsByMark, selectModel, 'model', 'Выберите модель автомобиля');
      createSelectOptions(sortCarsByMark, selectYear, 'year', 'Выберите год выпуска');
    });

    // При изменении значения модели авто обновляются последующий select
    selectModel.addEventListener('change', () => {
      sortCarsByModel = [];
      modelIndex = selectModel.options.selectedIndex;
      selectedModel = selectModel.options[modelIndex].value;

      for(let i = 0; i < sortCarsByMark.length; i++) {
        if (sortCarsByMark[i].model === selectedModel) {
          sortCarsByModel.push(sortCarsByMark[i]);
        }
      }
      selectYear.length = 0;
      createSelectOptions(sortCarsByModel, selectYear, 'year', 'Выберите год выпуска');
    });

    // После выбранного года выпуска проверются все значения selects, и если они валидны, то показывается кнопка
    selectYear.addEventListener('change', () => {
      yearIndex = selectYear.options.selectedIndex;
      selectedYear = selectYear.options[yearIndex].value;
      if (selectedMark.match('Выберите') || selectedModel.match('Выберите') || selectedYear.match('Выберите')) {
        btn.classList.add('hide');
      } else {
        btn.classList.remove('hide');
      }
    });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      for(let i = 0; i < cars.length; i++) {
        // Если все значения из массива совпадает выбранным значениям, то открывается календарь с диапазоном указанных дат
        if(cars[i].mark === selectedMark && cars[i].model === selectedModel && cars[i].year === selectedYear) {
          let deliveryStart = cars[i].delivery.split('-')[0].split('.').reverse().join('-'),
              deliveryEnd = cars[i].delivery.split('-')[1].split('.').reverse().join('-');
          console.log(cars[i]);

          // Настройка календаря
          $(function () {
            $('#calendar').datepicker({
              minDate: new Date(deliveryStart),
              maxDate: new Date(deliveryEnd),
              clearButton: 'true',
              position: 'top center',
              onSelect(formattedDate, date, inst) { //При выборе даты закрывается календарь, затем закрывается форма
                inst.hide();
                closeForm(cars[i].mark, cars[i].model, cars[i].year, formattedDate);
              }
            });
          })
        }
      }
    });
    
  })
};
export default selectCar;