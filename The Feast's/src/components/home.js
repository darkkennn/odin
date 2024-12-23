const currentContent = document.getElementById('content');
const header = document.querySelector('header');

export function loadHome(){
    loadBackground();
    loadDescription();
    loadDates()
    loadEvents();
}

function loadBackground(){
    const body = document.querySelector('body');
    body.classList.add('home')
}

function loadDescription(){
    const description =  document.createElement('div');
    description.className = 'description';

    header.classList.add = 'description-header';

    const para = document.createElement('p');
    para.innerHTML = `Welcome to the Feasts! Here you can enjoy multiple cuisines at michellin star level.`,
    `It's freshly made food that tastes just like homecooked food!`,
    `Feast's is designed with a variety of events that you can check out!`,
    `Below is the timings of our restaurant on specific dates, and make sure to check out our menu!`

    description.append(para);
    currentContent.append(description);
}

export function loadDates(){
    const dates = document.createElement('div');
    dates.className = 'dates';
    currentContent.classList = 'dates';

    const text = [
        "Monday: 5pm - 10pm",
        "Tuesday: 5pm - 10pm",
        "Wednesday: 5pm - 10pm",
        "Thursday: 5pm - 10pm",
        "Friday: 5pm - 12pm",
        "Saturday: 5pm - 12pm",
        "Sunday: 5pm - 12pm"
    ]

    for(let i = 0; i<text.length; i++){
        const para = document.createElement('p');
        para.innerHTML = text[i];
        dates.append(para);
    }
    currentContent.append(dates);
}

function loadEvents(){
    const events = document.createElement('div');
    events.className = 'events';

    const event1 = [
        `Monday: Spicy   Indian Curry Challenge `,
        `Tuesday: Italian Cheese Pull Challenge`,
        `Wednesday: French Wine Challenge`,
        `Thursday: German Sausage Challenge`,
        `Friday: Spicy Sushi Challenge`,
        `Saturday: Party Pack Challenge`,
        `Sunday: Sunday Special Surprise Challenge`
    ]

    for(let i = 0; i<event1.length; i++){
        const para2 = document.createElement('p');
        para2.innerHTML = event1[i];
        events.append(para2);
    }

    currentContent.append(events);
}