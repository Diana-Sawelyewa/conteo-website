function tabsServices () {
//табы в услугах
let tabsParent = document.querySelector('.offer'), 
tabsContent = document.querySelectorAll('.offer_details'), 
tabs = document.querySelectorAll('.offer_item');

function hideTabContent() {
tabsContent.forEach((item) => {
    item.style.display = 'none';
});
tabs.forEach((item) => {
    item.classList.remove('active');
});
}
function showTabContent(i = 0) {
tabsContent[i].style.display = 'block';
tabs[i].classList.add('active');
}
function toggleTabContent (i) {
tabs[i].classList.toggle('active');
if (tabsContent[i].style.maxHeight) {
    tabsContent[i].style.maxHeight = null; 
} else {
    tabsContent[i].style.maxHeight = tabsContent[i].scrollHeight + "px";
}
}
hideTabContent();
const funcComp= (event) => {
  const target = event.target.closest('.offer_item');
  
  if (target && target.classList.contains('offer_item')) { //
  tabs.forEach((item, i) => {
      if (target == item) { 
          hideTabContent();
          showTabContent(i);
      }
  });
  }
  }
  const funcMobile = (event) =>{
    const target = event.target.closest('.offer_item');
    
    if (target && target.classList.contains('offer_item')) { //
    tabs.forEach((item, i) => {
        if (target == item) { 
toggleTabContent(i)
        }
    });
    }
    }
function forMibileOffer () {
  hideTabContent();
  if (document.documentElement.clientWidth >=991) {
    showTabContent();
    tabsParent.removeEventListener('click', funcMobile);
    tabsParent.addEventListener('click', funcComp);
    } else { 
        tabsContent.forEach(item=> {
            item.style.display='block';
        })
        tabsParent.removeEventListener('click', funcComp)
        tabsParent.addEventListener('click', funcMobile);   
    }}
    forMibileOffer()
    window.addEventListener('resize', ()=> {
        forMibileOffer(); 
      })
}

export default tabsServices;