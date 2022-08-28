const 
    popularAuctionsMenuItem = document.querySelectorAll('.popular-auctions-menu__item'),
    hottestSaleOffersCarousItem = document.querySelectorAll('.hottest-sale-offers-carous__item');

function toggleActiveClass(portfolioMenu__link_active){
    popularAuctionsMenuItem.forEach(item => {
      item.classList.remove('popular-auctions-menu__item_active');
    })
    portfolioMenu__link_active.classList.add('popular-auctions-menu__item_active');
}

function toggleimages(dataClass){
    if (dataClass === 'all'){
        for(let i = 0; i < hottestSaleOffersCarousItem.length; i++){
            hottestSaleOffersCarousItem[i].style.display = 'block';
        }
    } else{
        for (let i = 0; i < hottestSaleOffersCarousItem.length; i++)
        hottestSaleOffersCarousItem[i].dataset.class === dataClass ? hottestSaleOffersCarousItem[i].style.display = 'block' : hottestSaleOffersCarousItem[i].style.display = 'none';
    }
}

for (let i = 0; i < popularAuctionsMenuItem.length; i++){
    popularAuctionsMenuItem[i].addEventListener('click', function(){
        toggleActiveClass(popularAuctionsMenuItem[i]);
        toggleimages(popularAuctionsMenuItem[i].dataset.class);
    });
}