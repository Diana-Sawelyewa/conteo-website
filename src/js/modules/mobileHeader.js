function mobileHeader() {
//всплывающий смол хедер
const header = document.querySelector('.sm-header');
const sectionInternational  = document.querySelector('.international');
const call = document.querySelector('.call-us');

 function handleScroll(x=window.innerWidth) {
  const headerHeight = ()=> {
    if (x <= 481) {
      return '50px'
    } else {
      return '80px'
    }
  }
    if (window.scrollY > 1100) {
        header.style.position = 'fixed';
        header.style.maxHeight = `${headerHeight()}`;
       header.style.transition = 'all 0.3s';
       call.classList.add('active');
    } else if (window.scrollY <= 100) {
header.style.position = 'absolute';
header.style.maxHeight = `${headerHeight()}`;
header.style.transition = 'all 0s';
    } else {
        header.style.maxHeight = '0';
       header.style.transition = 'all 0.3s';
       call.classList.remove('active');
    }
} 

    function mobileHeader () {
        if (window.innerWidth <= 990) {
        window.addEventListener('scroll', handleScroll, { passive: true });    
        }
        }
        mobileHeader()
        window.addEventListener('resize', ()=> {
            if (window.innerWidth <= 990) {
            mobileHeader();
            } else {
              header.style.position='';
              window.removeEventListener('scroll', handleScroll)
            }
          })
}

export default mobileHeader;