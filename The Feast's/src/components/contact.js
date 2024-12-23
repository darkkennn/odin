export function loadContact(){
    loadInfo();
}

const currentContent = document.getElementById('content');

function loadInfo(){
    const info = document.createElement('div');

    const text = [
        'If you wish to contact us, Please leave us an email at:',
        'totallyNotAFakeEmail@veryrealemail.com'
    ]
    for(let i = 0; i < text.length; i++){
        const para = document.createElement('p');
        para.innerHTML = text[i];
        info.appendChild(para);
    }

    const textTwo = [
        'To contact our Manager, please reach out to:',
        'RealManager@veryrealemail.com'
    ]
    for(let i = 0; i < textTwo.length; i++){
        const paraTwo = document.createElement('p');
        paraTwo.innerHTML = textTwo[i];
        info.appendChild(paraTwo);
    }

    const textThree = [
        'To compliment our chef, contact him at:',
        'ThatChef@veryrealemail.com'
    ]
    for(let i = 0; i < textThree.length;i++){
        const paraThree = document.createElement('p');
        paraThree.innerHTML = textThree[i];
        info.appendChild(paraThree);
    }

    const finalText = [
        'To contact us on your cell phone, dial us at:',
        '1234567890-real-number'
    ]
    for(let i = 0; i < finalText.length;i++){
        const paraFour = document.createElement('p');
        paraFour.innerHTML = finalText[i];
        info.appendChild(paraFour);
    }
    currentContent.append(info);
}