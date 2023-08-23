let nav = document.getElementById('nav')
let menu = document.getElementById('menu')
nav.onclick = function(){
  if(menu.classList.contains('active')){
    menu.classList.remove('active')
  }else{
    menu.classList.add('active')
  }
}
let arr = document.getElementById('arrow')
window.onscroll = function(){
  if(window.scrollY >= 600){
    arr.classList.add('top')
  }else{
    arr.classList.remove('top')
  }
}
arr.onclick = function(){
  window.scrollTo(0,0)
}