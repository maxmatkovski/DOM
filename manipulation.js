const allLinks = document.querySelectorAll('a');

for(let link of allLinks){
    link.innerText = 'I AM A LINK!!!'
}


// Overwriting an HTML element using JavaScript // CE 53

document.querySelector('span').innerText = 'Disgusting';


// CE 54 
const egg = document.querySelector('#egg');          // use # to select by id

egg.setAttribute('src', 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg');

egg.setAttribute('alt','chicken');
