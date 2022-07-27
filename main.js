/**
 * Computes the sum of the digits in the array, doubling every other digit and subtracting by 9 if element * 2 exceeds 9
 *
 * @param array
 * @returns {number}
 */
function computeSum(array) {
    let sum = 0;
    for(let i = array.length - 1; i >= 0; i--) {
        let multiplier = 1;

        if ((array.length - 1 - i) % 2 === 1) { //if index is even
            multiplier = 2; }

        let tempSum = multiplier * array[i];
        if(tempSum > 9) {
            tempSum -= 9; }

        sum += tempSum;
    }
    return sum;
}


/**
 * Uses the Luhn algorithm to validate a credit card number
 *
 * @param array array of integers 1-9
 * @returns {boolean} true if valid credit card, false otherwise
 */
function validateCred(array) {

    const checkDigit = array[array.length-1];
    const sum = computeSum(array);
    return sum % 10 === 0;
}

/**
 * Checks through a nested array of credit cards and returns an array of invalid card numbers
 *
 * @param nestedArray a nested array of credit card numbers
 * @returns {*[]} array of invalid card numbers
 */
function findInvalidCards(nestedArray) {
    let invalidCards = [];
    for(let array of nestedArray) {
        const isValid = validateCred(array);
        if(!isValid) invalidCards.push(array);
    }
    return invalidCards;
}

/**
 * Returns an array of companies that have issued an invalid card number, avoiding duplicates
 *
 * @param nestedArray a nested array of invalid card numbers
 * @returns {*[]} array of companies that issued an invalid card number
 */
function idInvalidCardCompanies(nestedArray) {
    let invalidCompanies = [];
    for(let array of nestedArray) {
        const firstDigit = array[0];
        let company;
        switch(firstDigit) {
            case 3: {
                company = 'Amex';
                break; }
            case 4: {
                company = 'Visa';
                break; }
            case 5: {
                company = 'Mastercard';
                break; }
            case 6: {
                company = 'Discover';
                break; }
        }
        if(invalidCompanies.indexOf(company) === -1) invalidCompanies.push(company);
    }
    return invalidCompanies;
}

const batch = require('./dataArrays');
//Test batch

let invalidCards = findInvalidCards(batch);
for(cardNumber of invalidCards) {
    console.log(cardNumber);
}
