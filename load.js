// nem gy�jtj�k tov�bb az esem�nyeket
init = false;
// v�gigl�pked�nk az esem�ny t�mbj�n
for(k in clicks){
    il = document.createEvent('MouseEvents');
    //szimul�ljuk ism�t az esem�nyt
    il.initMouseEvent('click', true, true, this, 1, 0, 0,0, 0, false, false, false, false, 0, null);
    clicks[k].dispatchEvent(il);
}