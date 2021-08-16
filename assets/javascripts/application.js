// This is the entrypoint for javascript
// Import all your js files here
// ...

require('../stylesheets/src/application.scss');
require('../../index.html');

const tabLists = document.querySelectorAll('.tab .tab__item');

function resetClassTab(item) {
    setTimeout(() => {
        item.classList.remove('active');
    }, 100);
}

function setContentTab(item, itemToActive) {
    try {
        setTimeout(() => {
            item.classList?.remove('active');
            document.querySelector(itemToActive)?.classList?.add('active');
            setTimeout(() => {
                item?.classList?.remove('show');
                document.querySelector(itemToActive)?.classList?.add('show');
            }, 200);
        }, 100);
    } catch (error) {
        console.error(error);
    }
}

tabLists.forEach(element => {
    element.addEventListener('click', () => {
        resetClassTab(document.querySelector('.tab .tab__item.active'));
        element.classList.add('show');
        element.classList.add('active');
        setContentTab(document.querySelector('.tab-content .tab-content__article.active.show'), element.getAttribute('data-rel-tab'));
    });
});

