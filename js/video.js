 let video = document.querySelector('.video__poster');
 let content = video.innerHTML;
 let play = document.querySelector('#video__play')
 let close = document.createElement('button');

 play.onclick = videoRun;

 function videoRun(e) {
   close.innerHTML = 'Закрыть видео';
   close.className = 'video__close'
   addVideo();
   delVideo();
 }

 function addVideo() {
   video.innerHTML = '<iframe width="499" height="300" src="https://www.youtube.com/embed/TY8sOLASVK8?autoplay=1" frameborder="0"    allowfullscreen></iframe>';
   video.appendChild(close);
 }

 function delVideo() {
   close.onclick = function () {
     video.innerHTML = content;
     document.querySelector('#video__play').onclick = videoRun;
   }
 }