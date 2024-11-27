function popUp() {
const modal = document.querySelector('.modal-form');
const btns = document.querySelectorAll('.btn-pop');
const close = document.querySelector('.close-form');

btns.forEach((item)=> {
item.addEventListener('click', ()=> {
  modal.style.display = "flex";
  disableScroll()
})
})


close.onclick = function() {
  modal.style.display = "none";
  enableScroll();
};


window.addEventListener('click', function(event) {
if (event.target == modal) {
    modal.style.display = "none"; 
    enableScroll();

}
});




function disableScroll() {
window.addEventListener('wheel', preventDefault, { passive: false });
window.addEventListener('touchmove', preventDefault, { passive: false });
}

function enableScroll() {
window.removeEventListener('wheel', preventDefault, { passive: false });
window.removeEventListener('touchmove', preventDefault, { passive: false });
}

function preventDefault(e) {
e.preventDefault();
}

document.addEventListener('keydown', function(event) {
  if (modal.style.display === 'flex') {
if (event.key === 'Escape') {
        modal.style.display = 'none'; 
        enableScroll();
      } else {
        return;
      }
  }
});

}

export default popUp;