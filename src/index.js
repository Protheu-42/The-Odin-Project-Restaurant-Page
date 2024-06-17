import './style.css';
import homepageLoader from './homepageLoader.js';
import contactpageLoader from './contactpageLoader.js';
import menupageLoader from './menupageLoader.js';

homepageLoader();

const NavBtnListeners = (function() {
    const contentDiv = document.querySelector('#content')
    const homeBtn = document.querySelector('#navHome');
    const menuBtn = document.querySelector('#navMenu');
    const contactBtn = document.querySelector('#navContact');

    homeBtn.addEventListener('click', () =>{
        cleanAllChilds();
        homepageLoader();
    });

    menuBtn.addEventListener('click', () => {
        cleanAllChilds();
        menupageLoader();
    })

    contactBtn.addEventListener('click', () =>{
        cleanAllChilds();
        contactpageLoader();
    });

    function cleanAllChilds() {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        };
    }
})();