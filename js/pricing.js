const response = await fetch('api/price.json');
const prices = await response.json();

function renderPrice(prices) {
    let priceDomString = '';
    for (let i = 0; i < prices.length; i++) {
        const product = prices[i];
        priceDomString += `        
        <div class="pricing__content-item pricing__item">
            <img class="pricing__item-image" src="${product.img}" alt="yoga pose icon">
            <h2 class="pricing__item-title">${product.title}</h2>
            <p class="pricing__item-text">${product.description}</p>
            <ul class="pricing__item-list ${product.className}">`;
        for(let i = 0; i < product.prices.length; i++) {
            priceDomString += `
                <li class="list__membership-item">•<span class="list-item"> ${product.prices[i].option} </span>
                ${product.prices[i].price} •</li>`;
        }
        priceDomString += `</ul>
            <a class="pricing__item-link button" href="#">JOIN US NOW</a>
            </div>`;
    }    
    const pricesContainer = document.querySelector('.pricing__content');
    pricesContainer.innerHTML = priceDomString;
}

renderPrice(prices);