// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

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
        if(i % 2 == 0) { //if index is even
            console.log(`multiplying ${array[i]} by 2`);
            multiplier = 2;
        }
        let tempSum = multiplier * array[i];
        if(tempSum > 9) {
            tempSum -= 9;
        }
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
    console.log(`checkDigit is ${checkDigit}`);
    const sum = computeCheckDigit(array);
    if(sum%10 === 0) {
        return true;
    } else return false;
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
    return invalidCompanies
}