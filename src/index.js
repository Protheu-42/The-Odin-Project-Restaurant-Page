import './style.css';
import homepageLoader from './homepageLoader.js';
import contactpageLoader from './contactpageLoader.js';

const NavBtnListeners = (function() {
    const contentDiv = document.querySelector('#content')
    const homeBtn = document.querySelector('#navHome');
    const menuBtn = document.querySelector('#navMenu');
    const contactBtn = document.querySelector('#navContact');

    homeBtn.addEventListener('click', () =>{
        cleanAndLoad();
        homepageLoader();
    });
    contactBtn.addEventListener('click', () =>{
        cleanAndLoad();
        contactpageLoader();
    });

    function cleanAndLoad() {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        };
    }
})();

homepageLoader()
