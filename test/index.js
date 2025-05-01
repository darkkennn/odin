const dropDownMenu = document.getElementById('cars');

dropDownMenu.addEventListener('mouseover', showDropDown);

function showDropDown(){
    dropDownMenu.classList.add('show');
}