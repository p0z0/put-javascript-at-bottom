// nem gy�jtj�k tov�bb az esem�nyeket
init = false;
// v�gigl�pked�nk az esem�ny t�mbj�n
$.each(clicks , function (k, v) {
    var il = document.createEvent('MouseEvents');
    // "szimul�ljuk" ism�t az esem�nyt
    // az els� v�ltozathoz k�pest this helyett window objektumot adunk meg, mivel m�shol helyezkedik el a met�dus
    il.initMouseEvent('click', true, true, window, 1, 0, 0,0, 0, false, false, false, false, 0, null);
    v.dispatchEvent(il);
});