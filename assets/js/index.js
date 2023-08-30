window.addEventListener("DOMContentLoaded", function() {
    
    const mainBlock = document.querySelector('.button-wrap');
    const buttonCircle = mainBlock.querySelector('.circle');
    
    const rangeInput = document.querySelector('input[type="range"]')
    const outputResult = document.querySelector('.right-side');
    const pageView = document.querySelector('.left-side');
    const min = 8
    const minPage = 10;
    let mainBlockState = false;

    rangeInput.value = 0
    outputResult.innerHTML = `$${min}<span>/ month</span>`;
    pageView.innerHTML =   `${minPage}K pageviews`;

    // toggle button slide and state button
    mainBlock.addEventListener('click', function() {
        buttonCircle.classList.toggle('change')
        mainBlock.classList.toggle('changeColor')
        mainBlockState = !mainBlockState
        if(mainBlockState === true) {
            salePrice()
        }
    });

    // range result
    rangeInput.addEventListener('input', function() {
        rangeResult(rangeInput.value)
    });
    function rangeResult() {
        htmlTemplate = `$${rangeInput.value}<span>/ month</span>`
        switch(rangeInput.value) {
            case "12":
                pageView.innerHTML =  `${50}K pageviews`;
                break;
            case "16":
                pageView.innerHTML =  `${100}K pageviews`;
                break;
            case "24":
                pageView.innerHTML =  `${500}K pageviews`;
                break;
            case "36":
                pageView.innerHTML =  `${1}M pageviews`;
                break;
            case "8":
                pageView.innerHTML =   `${10}K pageviews`;
                break;
            default:
                break;
        }
        outputResult.innerHTML = htmlTemplate
    };

});

// pageView result 
