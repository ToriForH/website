const response = await fetch('api/news.json');
const news = await response.json();

function renderNews(news) {
    let newsDomString = '';
    for (let i = 0; i < news.length; i++) {
        const newsItem = news[i];
        newsDomString += `
        <div class="news__list-item           
        `;
        if (newsItem.hasOwnProperty("date")) {
            newsDomString += `news__list-item-content"> <p class="news__item-date annotation">EDUCATE | ${newsItem.date}</p>`;
        }
        if (newsItem.hasOwnProperty("img")) {
            newsDomString += `"><img class="news__item-image" src="${newsItem.img.src}" alt="${newsItem.img.alt}">
                <div class="news__list-item-content">
                <h2 class="news__item-title">${newsItem.title}</h2>
                <p class="news__item-text">
                ${newsItem.text}
                </p>
                <a class="news__item-link" href="#">READ MORE</a>
                </div>
                </div>
                <hr class="news__list-line">
            `;
        } else {
            newsDomString += `<h2 class="news__item-title">${newsItem.title}</h2>
                <p class="news__item-text">
                ${newsItem.text}
                </p>
                <a class="news__item-link" href="#">READ MORE</a>
                </div>
                <hr class="news__list-line">
            `;
        }
    }
    const newsContainer = document.querySelector('.news__list');
    newsContainer.innerHTML = newsDomString;
    console.log(newsDomString);
}

renderNews(news);