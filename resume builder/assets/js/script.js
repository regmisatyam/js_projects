function toggleSlider() {
    const slider = document.getElementById('slider');
    const sliderWidth = slider.offsetWidth;
    const currentRight = getComputedStyle(slider).right;

    if (currentRight === '0px' || currentRight === 'auto') {
        slider.style.right = `-${sliderWidth}px`;
    } else {
        slider.style.right = '0';
    }
}

// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})


function customAlertBox() {
    var customBox = document.getElementById('customBox');
    customBox.classList.toggle('hidden');
}

function hideBox() {
    var customBox = document.getElementById('customBox');
    customBox.classList.add('hidden');
}

function checkScreenWidth() {
    if (window.innerWidth <= 600) { // You can adjust the threshold as needed
        customAlertBox();
    }
}

// Call the function on page load or other appropriate events
window.onload = checkScreenWidth;
