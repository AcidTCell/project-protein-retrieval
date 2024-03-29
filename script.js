let container = document.querySelector('#container');

let proteinButton = document.querySelector('#proteinButton');

proteinButton.addEventListener('click', getProteinSequence);



function getProteinSequence(){
    clearPage();
    
    let aminoAcidString = prompt('Protein Sequence: ');

    // Split the amino acids by the '.' symbol
    const aminoAcidArray = aminoAcidString.split('.');

    // Filter and print elements with length 9 or more
    const resultNineToFourteenInput = aminoAcidArray.filter(sequence => sequence.length >= 9 && sequence.length < 15);
    appendToPage('Protein - Length 9 to 14:');
    appendTableToPage(resultNineToFourteenInput);

    const resultSixteenUpInput = aminoAcidArray.filter(sequence => sequence.length >= 16);
    appendToPage('Protein - Length 16 and Up:');
    appendTableToPage(resultSixteenUpInput);

    const resultFifteenInput = aminoAcidArray.filter(sequence => sequence.length === 15);
    appendToPage('Protein - Length 15:');
    appendTableToPage(resultFifteenInput);

}

function clearPage(){
    container.innerHTML = '';
}

function appendToPage(text) {
    const p = document.createElement('p');
    p.classList.add('header');
    p.textContent = text;
    
    container.appendChild(p);
}

function appendTableToPage(data) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell = headerRow.insertCell();
    headerCell.classList.add('headerCell');
    headerCell.textContent = 'Amino Acid Sequence';
    data.forEach(sequence => {
        const row = table.insertRow();
        const cell = row.insertCell();
        cell.textContent = sequence;
    });
    container.appendChild(table);
}




