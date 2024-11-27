function pageUp() {
//кнопка подъема


const btnUp = document.querySelector('.btn-up');
window.addEventListener('scroll', () =>{
  if (window.scrollY > 400) {
    btnUp.style.bottom = '0';
  } else {
    btnUp.style.bottom = '-55px';
  }
}, { passive: true })

btnUp.addEventListener('click', ()=> {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // это позволяет прокрутке быть плавной
});
})

}

export default pageUp;