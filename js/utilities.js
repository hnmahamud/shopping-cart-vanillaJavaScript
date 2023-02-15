/* Value increment/ decrement */
function counter (inputFieldId, action) {
    const inputField = document.getElementById(inputFieldId);
    const inputValue = parseInt(inputField.value);
    if(action === 'increment') {
        inputField.value = inputValue + 1;
        return parseInt(inputField.value);
    }
    if(action === 'decrement') {
        if(inputValue > 0) {
            inputField.value = inputValue - 1;
            return parseInt(inputField.value);
        }
    }
}


/* Price update */
function totalPriceUpdate (totalItem, elementId) {
    const elementTextField = document.getElementById(elementId);
    if(totalItem >= 0) {
        let itemUpdatePrice = 0;
        if(elementId === 'phn-price') {
            itemUpdatePrice = 1219 * totalItem;
        }
        if(elementId === 'case-price') {
            itemUpdatePrice = 59 * totalItem;
        }
        elementTextField.innerText = itemUpdatePrice;
        return itemUpdatePrice;
    }
}


/* Get text element value */
function getTextValue (elementId) {
    const elementPriceField = document.getElementById(elementId);
    const elementPrice = parseInt(elementPriceField.innerText);
    return elementPrice;
}


/* Set text element value */
function setTextValue (elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}


/* Calculate subtotal, tax and final total */
function finalTotal () {
    const phnPrice = getTextValue('phn-price');
    const casePrice = getTextValue('case-price');

    const subTotal = phnPrice + casePrice;
    const tax = (subTotal * 0.1).toFixed(2);
    const mainTotal = parseFloat(subTotal) + parseFloat(tax);

    setTextValue('sub-total', subTotal);
    setTextValue('tax', tax);
    setTextValue('main-total', mainTotal);
}