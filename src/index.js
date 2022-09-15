

const contentDiv = document.querySelector('#content');

function makeNavbar() {
    const nav = document.createElement("NAV");
   // nav.id = 'placeholder'
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
    contentDiv.append(nav);    
  }
  


function homeContent(){
    const main = document.createElement('main');
    const welcomeMsg = document.createElement('h1');
    welcomeMsg.innerText = 'Welcome to Mighty Mighty Burgers!'
    main.appendChild(welcomeMsg);
    const welcomeContent =  document.createElement('p');
    welcomeContent.innerText =  'We use only the finest locally sourced organic ingredients.' 
    + ' Our beef is %100 grass-fed. Come taste the mighty difference quality and care make!'
    main.appendChild(welcomeContent);
   
    contentDiv.appendChild(main);   
}

makeNavbar();
homeContent();
