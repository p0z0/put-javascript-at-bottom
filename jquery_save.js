(function(){
    // a script addig gy�jtse az eventeket, am�g az init v�ltoz�t false ra nem �ll�tjuk
    init = true;
    // az eventeket tartalmaz� t�mb
    clicks = new Array;
    var i = 0;
    window.addEventListener('click',function(e){            
        if(init){
            clicks[i] = new Array;
            // az objektum amin v�grehajt�dott az esem�ny
            clicks[i] = e.target;
            i++;
        }
    },false);
})();