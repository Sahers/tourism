console.log('Hello World!');
let nav = document.getElementById('nav')
let menu = document.getElementById('menu')
nav.onclick = function(){
  if(menu.classList.contains('active')){
    menu.classList.remove('active')
  }else{
    menu.classList.add('active')
  }
}