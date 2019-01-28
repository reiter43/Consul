ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [34.059217, -118.220581],
      zoom: 9
    }, ),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Головной офис',
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map.png',
      // Размеры метки.
      iconImageSize: [75, 79],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [0, 0]
    })

      myMap.geoObjects
    .add(myPlacemark)
    
});


ymaps.ready(function () {
  var myMap = new ymaps.Map('map2', {
      center: [34.461725, -119.718096],
      zoom: 10
    }, ),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Доп офис в Калифорнии',
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/map.png' ,
      // Размеры метки.
      iconImageSize: [75, 79],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [0, -20]
    })

      myMap.geoObjects
    .add(myPlacemark)
    
});

// ymaps.ready(function () {
//   var myMap = new ymaps.Map('map3', {
//       center: [51.506107, -0.128484],
//       zoom: 10
//     }, ),

//     // Создаём макет содержимого.
//     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//       '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//     ),

//     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//       hintContent: 'Доп офис в Лондоне',
//     }, {
//       // Опции.
//       // Необходимо указать данный тип макета.
//       iconLayout: 'default#image',
//       // Своё изображение иконки метки.
//       iconImageHref: '../img/map.png',
//       // Размеры метки.
//       iconImageSize: [75, 79],
//       // Смещение левого верхнего угла иконки относительно
//       // её "ножки" (точки привязки).
//       iconImageOffset: [0, -20]
//     })

//       myMap.geoObjects
//     .add(myPlacemark)
    
// });