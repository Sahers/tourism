let nav = document.getElementById('nav')
let menu = document.getElementById('menu')
let navs = nav.children
let n = [...navs]
nav.onclick = function(){
  if(menu.classList.contains('active')){
    menu.classList.remove('active')
    n[0].style.top = "-15px"
    n[1].style.display = "block"
    n[2].style.top = "25px"
    n[0].style.transform = "rotate(0)"
    n[2].style.transform = "rotate(0)"
  }else{
    menu.classList.add('active')
    n[0].style.top = "5px"
    n[1].style.display = "none"
    n[2].style.top = "5px"
    n[0].style.transform = "rotate(45deg)"
    n[2].style.transform = "rotate(-45deg)"
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
