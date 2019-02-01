//Функция создания чипса (всплывающего окна)
function chips(message, timeremove = 3000) {
  let chips = document.createElement('div'); // генерируем блок
  chips.classList.add('chipp'); // присваиваем ему класс
  chips.innerHTML = message; // вставляем в блок какое-либо сообщение
  addChips(chips);//создание чипса
  setTimeout(function () {deleteChips(chips)}, timeremove)
}; // формирование времени жизни чипса

  // удаление чипса
function deleteChips(chips) {
  chips.remove();
}

function addChips(chips) {// функция, прверяющая существования поля (дива)для чипсов. Если оно есть, то создается в нем чипс на странице документа; если нет, то сначала создается такое поле, а потом в нем чипс
  let chipsField = document.querySelector('.chips-field');
  if (chipsField) {
      chipsField.appendChild(chips);
  }
  else {
      let chipsField = document.createElement('div');
      chipsField.classList.add('chips-field');
      document.querySelector('body').appendChild(chipsField);
      chipsField.appendChild(chips);
  }
}