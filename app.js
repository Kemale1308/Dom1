let listContainer = document.querySelector('#list-container');

function addName(firstName, lastName) {

    let  newItem = document.createElement('div');
    newItem.innerText = `${firstName} ${lastName}`;
    listContainer.append(newItem);
}

addName('Elmine', 'Əliyeva');
addName('Aygün', 'Namazova');
addName('Cavid', 'Memmedov');
addName('Kemale','Esgerova');
addName('Kenan','Esgerov')
