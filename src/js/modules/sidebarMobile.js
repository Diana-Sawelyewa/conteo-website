function sidebarMobile() {
//модальное меню мобильное 
const sidebar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger');
const close = document.querySelector('.close-menu');
const links = sidebar.querySelectorAll('a');
links.forEach(item=> {
  item.addEventListener('click', ()=> {
    sidebar.classList.remove('active');
  })
})
burger.addEventListener('click', function() {
    sidebar.classList.add('active');
});
close.addEventListener('click', function() {
    sidebar.classList.remove('active');
});
}

export default sidebarMobile;