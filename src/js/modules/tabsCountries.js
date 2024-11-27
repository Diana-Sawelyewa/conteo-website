function tabsCountries () {
//табы в странах производителях
const countryParent = document.querySelector('.country'),
countries = document.querySelectorAll('.country_item'),
countryTabs = document.querySelectorAll('.show'),
rollCountry = document.querySelector('.roll_country');

countryParent.addEventListener('click', event => {
    const target = event.target.closest('.country_item');

    if (target && target.classList.contains('country_item')) {
        countries.forEach((item,i)=> {
            if (target==item) {
                item.classList.toggle('active');
                countryTabs[i].classList.toggle('active_country');
                if (item.classList.contains('active')) {
                    rollCountry.classList.add('activeRoll')  
                } else {
                    rollCountry.classList.remove('activeRoll')
                }
            } else {
                item.classList.remove('active');
                countryTabs[i].classList.remove('active_country');
            }
        })
    }
})
}

export default tabsCountries;