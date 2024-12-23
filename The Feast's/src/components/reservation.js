import { loadDates } from "./home";
const currentContent = document.getElementById('content');

export function loadReservation(){
    loadBackground();
    loadForm();
    loadReserve();
    guestTimings();
}

function loadBackground(){
    const body = document.querySelector('body');
    body.classList.add('reservation');
}

function loadForm(){
    const myForm = document.createElement('form');
    myForm.name = 'myForm';
    myForm.method = 'POST';

    const myTextInput = document.createElement('input');
    myTextInput.type = 'text';
    myTextInput.name = 'First Name';
    myTextInput.placeholder = 'Enter your first name';
    myForm.appendChild(myTextInput);

   const myTextInputTwo = document.createElement('input');
    myTextInputTwo.type = 'text';
    myTextInputTwo.name = 'Last Name';
    myTextInputTwo.placeholder = 'Enter your last name';
    myForm.appendChild(myTextInputTwo);

    const contactInput = document.createElement('input');
    contactInput.type = 'number';
    contactInput.name = 'Contact Number';
    contactInput.placeholder = 'Enter your number';
    myForm.appendChild(contactInput);

    currentContent.append(myForm);
}

function loadReserve(){
    const dateAndTime = document.createElement('div');
    const text = [
        `Please make sure to make a reservation under the given timings: `
    ]
    for(let i = 0; i<text.length; i++){
        const para = document.createElement('p');
        para.innerHTML = text[i];
        dateAndTime.append(para);
    }
    currentContent.append(dateAndTime);
}

function guestTimings(){

    const days = [
        'Please Select',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        ' Friday',
        ' Saturday',
        ' Sunday'
    ]; 

    const guestDays = document.createElement('div');
    const label = document.createElement('label');
    label.textContent = 'Select your arrival date: ';
    guestDays.appendChild(label);
    const daysDropDown = document.createElement('select');
    guestDays.appendChild(daysDropDown);
    for(let i = 0; i <= 7; i++){
        const options = document.createElement('option');
        options.setAttribute('days', 'i');
        options.textContent = days[i];
        daysDropDown.appendChild(options);
    }
    currentContent.append(guestDays);
    
    const guestList = document.createElement('div');
    const label2 = document.createElement('label');
    label2.textContent = 'Select your arrival time: ';
    guestList.appendChild(label2);
    const dropDown = document.createElement('select');
    guestList.appendChild(dropDown);
    daysDropDown.addEventListener('change', updateDays);
    currentContent.append(guestList);

    function updateDays(e){
        daysDropDown.value == this.value;

        while(dropDown.firstChild){
            dropDown.removeChild(dropDown.firstChild);
        }
        
        if(daysDropDown.value == 'Monday' || daysDropDown.value == 'Tuesday' || daysDropDown.value == 'Wednesday' || daysDropDown.value == 'Thursday'){
            for(let i = 5; i <= 10; i++) {
                const option = document.createElement('option');
                option.setAttribute('value', 'i');
                option.textContent = i;        
                dropDown.appendChild(option);
            }
        } else if (daysDropDown.value == 'Friday' || daysDropDown.value == 'Saturday' || daysDropDown.value == 'Sunday') {
            for(let i = 5; i<=12; i++){
                const option = document.createElement('option');
                option.setAttribute('value', 'i');
                option.textContent = i;        
                dropDown.appendChild(option);
            }
        } else{
            daysDropDown.value == null;
        }
    }

    loadDates();
}