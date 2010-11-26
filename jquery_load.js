// nem gyűjtjük tovább az eseményeket
init = false;
// végiglépkedünk az esemény tömbjén
$.each(clicks , function (k, v) {
    var il = document.createEvent('MouseEvents');
    // "szimuláljuk" ismét az eseményt
    // az első változathoz képest this helyett window objektumot adunk meg, mivel máshol helyezkedik el a metódus
    il.initMouseEvent('click', true, true, window, 1, 0, 0,0, 0, false, false, false, false, 0, null);
    v.dispatchEvent(il);
});