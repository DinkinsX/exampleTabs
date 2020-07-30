let blockTabs = '.info-header',
    singleTab = '.info-header-tab',
    contentTab = '.info-tabcontent';

window.addEventListener('DOMContentLoaded', function() {
    'use strict'; 

    let tab = document.querySelectorAll(singleTab),
        info = document.querySelector(blockTabs), //parent
        tabContent = document.querySelectorAll(contentTab);


    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }

    }
    hideTabContent(1); // how many tabs show on start

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) { //check hide
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains(singleTab.slice(1))) { 
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

});