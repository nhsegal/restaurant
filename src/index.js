//import makeFoodMenu from './menu.js';

const contentDiv = document.querySelector('#content');

function makeNavbar() {
  console.log('asdf');
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

function makeFoodMenu(){
    const foodMenu= document.createElement('div');
    foodMenu.id = 'food-menu';
  
    const burgers= document.createElement('div');
   
    burgers.id = 'burgers';
    burgers.className = 'heading';
    burgers.innerText = 'Burgers';
  
    const burger_container = document.createElement('div');
    burger_container.className = "item-container";

    const beef =  document.createElement('div');
    beef.className = 'item';
    beef.innerText = 'Beef Hamburger';
    const beefPrice =  document.createElement('div');
    beefPrice.className = 'price';
    beefPrice.innerText = "$9";

    const lamb =  document.createElement('div');
    lamb.className = 'item';
    lamb.innerText = 'Lamb Hamburger';
    const lambPrice =  document.createElement('div');
    lambPrice.className = 'price';
    lambPrice.innerText = "$12";

    const veg =  document.createElement('div');
    veg.className = 'item';
    veg.innerText = 'Veggie Hamburger';
    const vegPrice =  document.createElement('div');
    vegPrice.className = 'price';
    vegPrice.innerText = "$8";

    burger_container.append(beef, beefPrice, lamb, lambPrice, veg, vegPrice);

    const sides = document.createElement('div');
   
    sides.id = 'sides';
    sides.className = 'heading';
    sides.innerText = 'sides';

    const sides_container = document.createElement('div');
    sides_container.className = "item-container";

    const fries =  document.createElement('div');
    fries.className = 'item';
    fries.innerText = 'Fries';
  
    const friesPrice =  document.createElement('div');
    friesPrice.className = 'price';
    friesPrice.innerText = "$4";

    const onion =  document.createElement('div');
    onion.className = 'item';
    onion.innerText = 'Onion Rings';
  
    const onionPrice =  document.createElement('div');
    onionPrice.className = 'price';
    onionPrice.innerText = "$5";

    sides_container.append(fries, friesPrice, onion, onionPrice);
    foodMenu.append(burgers, burger_container, sides, sides_container);
    return foodMenu;
    
} 


  
  contentDiv.append(makeNavbar());
  contentDiv.append(makeFoodMenu());


