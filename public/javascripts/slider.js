window.addEventListener('load', () => {
    console.log('vinculacion exitosa');

    const slider = document.querySelector('#slider')
    let sliderSection = document.querySelectorAll('.slider-section')
    let sliderSectionLast = sliderSection[sliderSection.length-1];

    const bttnLeft = document.querySelector('#bttn-left')
    const bttnRight = document.querySelector('#bttn-right')

    slider.insertAdjacentElement('afterbegin', sliderSectionLast)

    function next() {
        let sliderSectionFirst = document.querySelectorAll('.slider-section')[0]
        slider.style.marginLeft = "-200%"
        slider.style.transition = "all 0.5s"
        setTimeout(function(){
            slider.style.transition = "none"
            slider.insertAdjacentElement('beforeend', sliderSectionFirst)
            slider.style.marginLeft = "-100%"
        }, 500);
    }

    function previous() {
        let sliderSection = document.querySelectorAll('.slider-section')
        let sliderSectionLast = sliderSection[sliderSection.length-1];
        slider.style.marginLeft = "0"
        slider.style.transition = "all 0.5s"
        setTimeout(function(){
            slider.style.transition = "none"
            slider.insertAdjacentElement('afterbegin', sliderSectionLast)
            slider.style.marginLeft = "-100%"
        }, 500);
    }

    bttnRight.addEventListener('click', () => {
        next();
    })
    
    bttnLeft.addEventListener('click', () => {
        previous();
    })


    setInterval(() => {
        next()
    }, 5000);
})