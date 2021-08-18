// This is the entrypoint for javascript
// Import all your js files here
// ...

require('../stylesheets/src/application.scss');
require('../../index.html');

const tabLists = document.querySelectorAll('.tab .tab__item');
const accordionList = document.querySelectorAll(".accordion__item");
let timeResize = null;

function resetClassTab(item) {
    setTimeout(() => {
        item?.classList.remove('active');
    }, 100);
}

function resetContentTab(item, itemToActive) {
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
        if (!element.classList.contains('active')) {
            resetClassTab(document.querySelector('.tab .tab__item.active'));
            element.classList.add('show');
            element.classList.add('active');
            resetContentTab(document.querySelector('.tab-content .tab-content__article.active.show'), element.getAttribute('data-rel-tab'));
        }
    });
    if (element.classList.contains('active')) {
        resetContentTab(document.querySelector('.tab-content .tab-content__article.active.show'), element.getAttribute('data-rel-tab'));
    }
});

// Referente a los Accordions
function checkAccordionItem(item, reset = false) {
    const content = document.querySelector(item.getAttribute('data-rel-accordion')) || null;
    if (content?.style?.maxHeight && reset) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content?.scrollHeight + "px";
    }
}

accordionList.forEach(element => {
    const title = element?.querySelector('.accordion__title') || null;
    title.addEventListener("click", () => {
        const closestListAccordion = element.closest('.accordion__body');

        element.classList.toggle("expanded");
        checkAccordionItem(element, true);
        setTimeout(() => {
            if (closestListAccordion) {
                document.querySelectorAll(`[data-rel-accordion="#${closestListAccordion.getAttribute('id')}"]`).forEach(item => {
                    checkAccordionItem(item, false);
                });
            }
        }, 230);
    });
    if (element.classList.contains('expanded')) {
        checkAccordionItem(element);
    }
});

window.addEventListener('resize', () => {
    clearTimeout(timeResize);
    timeResize = setTimeout(() => {
        accordionList.forEach(element => {
            if (element.classList.contains('expanded')) {
                checkAccordionItem(element);
            }
        });
    }, 250);
});