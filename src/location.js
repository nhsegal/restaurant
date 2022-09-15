function locationInfo(){
    const main = document.createElement('main');
    const welcomeMsg = document.createElement('h1');
    welcomeMsg.innerText = 'Come vist us!'

    const address_1 =  document.createElement('div');
    address_1.innerText =  '123 Nowhere Dr. ';
    const address_2 =  document.createElement('div');
    address_2.innerText =  'Sometown, OH 43001'
   

    const phone =  document.createElement('div');
    phone.innerText =  'Tel: (440) 555-5555';
    const email =  document.createElement('div');
    email.innerText =  'mightyburgers@burgers.com'
    main.append(welcomeMsg, address_1, address_2, phone, email);
    return main;
}

export default locationInfo;