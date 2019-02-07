let arr = document.querySelectorAll('.nav__picture-dropDown'); //создаем массив из изображений элементов выпадающего списка
let drop = document.querySelector('.nav__dropDown>img'); // получаем изображение корневого элемента выпадающего списка
let base = document.querySelectorAll('.nav__dropDown ') // получаем корневой элемент выпадающего списка

let list = document.querySelector('.nav__list-dropDown'); // получаем весь ВС


for (let j = 0; j < arr.length; j = j + 1) {console.log(base[j].style.display);
  if ( base[j].style !== "undefined") {
    base[j].onclick = function () { // функция, управляющая скрытием и видимостью всего ВС
      if (list.classList.contains('hide')) { // если блок имеет класс 'hide', то  удаляем класс 'hide'
        list.classList.remove('hide');
        list.style.visibility = 'hidden';
      } else { // иначе добавляем элементу класс 'hide'
        list.classList.add('hide');
        list.style.visibility = 'visible';
      }
    }
  }
}

for (let i = 0; i < arr.length; i = i + 1) { // создаем цикл с условиями по  массиву 
  arr[i].onclick = function () { // вешаем на клик по блоку функцию, которая присваивает значение атрибута пути "кликнутого" изображения, пути изображения корневого элемента
    drop.src = arr[i].src;
    document.querySelector('.nav__list-dropDown').style.visibility = 'hidden';
  }
}

//Кнопка-гамбургер
document.querySelector('.btn-nav').onclick = function () { //функция, переключающая классы, тем самым скрывается и показываетс окно
  let menu = document.querySelector('.nav');
  menu.classList.toggle('hide-2');
}