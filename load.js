// nem gyűjtjük tovább az eseményeket
init = false;
// végiglépkedünk az esemény tömbjén
for(k in clicks){
    il = document.createEvent('MouseEvents');
    //szimuláljuk ismét az eseményt
    il.initMouseEvent('click', true, true, this, 1, 0, 0,0, 0, false, false, false, false, 0, null);
    clicks[k].dispatchEvent(il);
}