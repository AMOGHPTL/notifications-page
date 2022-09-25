const cards = document.querySelectorAll('.card');
const msg = document.querySelector('.msg');
const hidden = document.querySelector('.hidden');
const reds = document.querySelectorAll('.red-dot');
const number = document.querySelector('.number');
const mark = document.querySelector('.mark')



let numbers = 0;
for(let card of cards){
    for(let red of reds){
    if(card.contains(red)){
        numbers++;
    }
}}
number.innerText=numbers;


for(let card of cards){
    card.addEventListener('click',function(){
        for(let red of reds){
            if(card.contains(red)){
                if(red.classList.contains('hidden')===false){
                    number.innerText--;
                }
                red.classList.add('hidden')
            }}
    if(card.contains(msg)){
        msg.classList.toggle('hidden')
    }  
    
})
    }


mark.addEventListener('click',function(){
    number.innerText=0;
    for(let red of reds){
    red.classList.add('hidden')
    }
})


 
  

    