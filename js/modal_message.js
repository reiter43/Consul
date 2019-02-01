document.querySelector('.row-contact__button').onclick = showModal; 

function showModal() { // функция, открывающая модальное окно 
  
  document.querySelector('#sign-up').classList.remove('message__hide');
  document.onkeydown = function (event) {
    //закрываем окно на кнопку Esc
    if (event.keyCode == 27) {
       closeModal();
       clearForm(); // функция очистки формы
    }
  }
}

document.querySelectorAll('#btn-close').forEach(function (element) {
  //закрываем окно на кнопке закрыть
  element.onclick = function () {
    closeModal();
    
    clearForm(); // функция очистки формы
  }
})

document.querySelectorAll('.modal-login__wrap').forEach(function (element) {
  //закрываем окно на клике в области серой
  element.onclick = function () {
    closeModal();
    clearForm(); // функция очистки формы
  }
})

function closeModal() { // функция, закрывающая модальное окно 
  document.querySelectorAll('.modal-login__wrap').forEach(function (element) {
    element.classList.add('message__hide');
  });
  document.onkeydown = null;
}

// document.querySelector('#btn-clear').onclick = function(){
//   clearForm();// очистка формы по кнопке
// } 

document.querySelector('.modal-login').onclick = function (event) {
  event.stopPropagation(); //отменяем распространение(всплытие) события на конкретной форме, чтобы окно не закрывалось при клике по форме)
}

function clearForm() { // очищаем форму, присваивая ее полям пустые значения
  document.querySelector('#name').value = '';
   document.querySelector('#email').value = '';
  document.querySelector('.message-form').value = '';
}


