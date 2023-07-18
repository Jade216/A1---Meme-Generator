
const form = document.querySelector('form');
const addImg = document.querySelector('#img');
const topText = document.querySelector('#top-text');
const bottomText = document.querySelector('#bottom-text');
const body = document.querySelector('body');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const image = document.createElement('img');
    const textUp = document.createElement('span');
    const textDown = document.createElement('span');
    const divImg = document.createElement('div');
    const divTop = document.createElement('div');
    const divBtm = document.createElement('div');
    
    image.src = addImg.value;
    // image.classList.add('newimg');
    textUp.innerText = topText.value;
    // textUp.classList.add('textUp');
    textDown.innerText = bottomText.value;
    // textDown.classList.add('textDown');
    divImg.classList.add('divImg');
    divTop.classList.add('divTop');
    divBtm.classList.add('divBtm');
    divImg.append(image);
    divTop.append(textUp);
    divBtm.append(textDown);
    body.append(divImg);
    body.append(divTop);
    body.append(divBtm);
    addImg.value = "";
    topText.value = "";
    bottomText.value = "";
});

body.addEventListener('click', function(e){
    if (e.target.tagName === 'IMG'){
        e.target.remove();
    }
    
})
