function timer(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(`console.log("Helloji!")${i}`);
        },i*1000);    
    }           

}
timer();