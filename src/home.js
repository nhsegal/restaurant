

 function homeContent(){
    const main = document.createElement('main');
    const welcomeMsg = document.createElement('h1');
    welcomeMsg.innerText = 'Welcome to Mighty Mighty Burgers!'

    const welcomeContent =  document.createElement('div');
    welcomeContent.innerText =  'We use only the finest locally sourced organic ingredients.' 
    + ' Our beef is %100 grass-fed. Come taste the mighty difference quality and care make!'
    main.append(welcomeMsg, welcomeContent);
    return main;
    
}

export default homeContent;