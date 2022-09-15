import makeFoodMenu from './menu.js';
import homeContent from './home.js';
import locationInfo from './location.js';

const contentDiv = document.querySelector('#content');
const tabContent = document.createElement('div');
tabContent.id = 'tabContent';

function makeNavbar() {
    const nav = document.createElement("NAV");
    const ul = document.createElement('ul');
    ul.id = 'mainMenu';
    
    const li_1 =  document.createElement('li');
    const a_1 =  document.createElement('a');
    a_1.innerText = "Home";
    a_1.href = '#';
    li_1.appendChild(a_1);
    
    const li_2 =  document.createElement('li');
    const a_2 =  document.createElement('a');
    a_2.innerText = "Menu";
    a_2.href = '#';
    li_2.appendChild(a_2);

    const li_3 =  document.createElement('li');
    const a_3 =  document.createElement('a');
    a_3.innerText = "Location";
    a_3.href = '#';
    li_3.appendChild(a_3);

    ul.append(li_1, li_2, li_3);
    nav.append(ul);
    return nav;
  }

function addEventListenersToNav(){
  const aList = document.querySelectorAll('nav>ul>li>a');
  for (let i = 0; i < aList.length; i++) { 
      aList[i].addEventListener('click', switchContent);
    }
}

function switchContent(e){
    const tab = e.target.innerText;
    switch (tab) {
      case 'Home':
        tabContent.innerHTML = '';
        tabContent.append(homeContent());
        break;
      case 'Menu':
        tabContent.innerHTML = '';
        tabContent.append(makeFoodMenu());
        break;
      case 'Location':
        tabContent.innerHTML = '';
        tabContent.append(locationInfo());
      break;
    }
}

contentDiv.append(makeNavbar());
contentDiv.append(tabContent);
tabContent.append(homeContent());
addEventListenersToNav();






