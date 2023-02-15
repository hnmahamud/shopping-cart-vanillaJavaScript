/* Click phone minus button */
const btnPhnMinus = document.getElementById('btn-phn-minus');
btnPhnMinus.addEventListener('click', function() {
    // counter (inputFieldId, action)
    const totalPhn = counter('phn-input-field', 'decrement');
    // totalPriceUpdate (totalItem, elementId)
    totalPriceUpdate(totalPhn, 'phn-price');
    finalTotal()
});


/* Click phone plus button */
const btnPhnPlus = document.getElementById('btn-phn-plus');
btnPhnPlus.addEventListener('click', function() {
    // counter (inputFieldId, action)
    const totalPhn = counter('phn-input-field', 'increment');
    // totalPriceUpdate (totalItem, elementId)
    totalPriceUpdate(totalPhn, 'phn-price');
    finalTotal()
});


/* Click case minus button */
const btnCaseMinus = document.getElementById('btn-case-minus');
btnCaseMinus.addEventListener('click', function() {
    // counter (inputFieldId, action)
    const totalCase = counter('case-input-field', 'decrement');
    // totalPriceUpdate (totalItem, elementId)
    totalPriceUpdate(totalCase, 'case-price');
    finalTotal()
});


/* Click case plus button */
const btnCasePlus = document.getElementById('btn-case-plus');
btnCasePlus.addEventListener('click', function() {
    // counter (inputFieldId, action)
    const totalCase = counter('case-input-field', 'increment');
    // totalPriceUpdate (totalItem, elementId)
    totalPriceUpdate(totalCase, 'case-price');
    finalTotal()
});