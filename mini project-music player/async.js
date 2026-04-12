const textcontent=document.querySelector('#text');
let seconds=0;
    textcontent.textContent=seconds;

const timer=setInterval(()=>{
    seconds++;
    textcontent.textContent=seconds;
    if(seconds===10){
        clearInterval(timer);
    }   
},0);

