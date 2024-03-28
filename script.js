let aminoAcidString = prompt('Protein Sequence: ');



// Split the amino acids by the '.' symbol
const aminoAcidArray = aminoAcidString.split('.');

// Filter and print elements with length 9 or more
const resultNineToFourteenInput = aminoAcidArray.filter(sequence => sequence.length >= 9 && sequence.length < 15);
console.log('Protein')
console.table(resultNineToFourteenInput);

const resultSixteenUpInput = aminoAcidArray.filter(sequence => sequence.length >= 16);
console.table(resultSixteenUpInput);

const resultFifteenInput = aminoAcidArray.filter(sequence => sequence.length === 15);
console.table(resultFifteenInput);




