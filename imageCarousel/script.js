const slides = document.getElementById('slides');
let count = 0;

for(const slide in slides){
    let slideCount =+ 1;
    slides[slideCount].count = slideCount;

    slide.addEventListener('click', NextSlide);
}

function NextSlide(){
    
}