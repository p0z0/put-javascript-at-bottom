(function(){
    //a script addig gy�jtse az eventeket, am�g az init v�ltoz�t false ra nem �ll�tjuk
    init = true;
    //az eventeket tartalmaz� t�mb
    clicks = new Array;
    i = 0;
    window.addEventListener('click',function(e){            
        if(init){
            console.log(i);
            clicks[i] = new Array;
            // az elem amin v�grehajt�dott az esem�ny
            clicks[i] = e.target;
            i++;
        }
    },false);
})();