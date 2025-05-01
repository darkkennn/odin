const dropDownMenu = document.getElementById('dropdown1');
const header = document.getElementById('header');

header.addEventListener('click', showDropDown);

function showDropDown(){
    dropDownMenu.classList.add('show');
}