(function(){
    //a script addig gyûjtse az eventeket, amíg az init változót false ra nem állítjuk
    init = true;
    //az eventeket tartalmazó tömb
    clicks = new Array;
    i = 0;
    window.addEventListener('click',function(e){            
        if(init){
            console.log(i);
            clicks[i] = new Array;
            // az elem amin végrehajtódott az esemény
            clicks[i] = e.target;
            i++;
        }
    },false);
})();