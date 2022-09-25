const cards = document.querySelectorAll('.card');
const msg = document.querySelector('.msg');
const hidden = document.querySelector('.hidden');
const reds = document.querySelectorAll('.red-dot');


for(let card of cards){
    card.addEventListener('click',function(){
    if(card.contains(msg)){
        msg.classList.toggle('hidden')
    }  
    for(let red of reds){
    if(card.contains(red)){
        red.classList.add('hidden')
    }}
    })
    }

