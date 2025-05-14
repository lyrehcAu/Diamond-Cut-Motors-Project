function toggleMore() {
    let showMoreBox = document.getElementById("moreBox");
    let buttonMore = document.getElementById("dropButton");
    let buttonLess = document.getElementById("upButton");

    if(showMoreBox.style.display === "none" || showMoreBox.style.display === ""){
        showMoreBox.style.display = "flex";
        buttonMore.style.display = "none";
        buttonLess.style.display = "block";
    }
    else{
        showMoreBox.style.display = "none";
        buttonMore.style.display = "block";
        buttonLess.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    let slider = document.getElementById("featuredSlider");
    let items = slider.getElementsByClassName("sliderItem");
    let currentIndex = 0;
    const totalItems = items.length;
    let navDots = document.getElementById("navDots");

    function createDots(){
        for(let i = 0; i < totalItems; i++){
            let dot = document.createElement("span");
            dot.classList.add("dot");
            dot.addEventListener("click", function(){
                goToSlide(i);
            });
            navDots.appendChild(dot);
        }
        updateDots();
    }

    function updateSlider(){
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    function updateDots(){
        let dots = navDots.getElementsByClassName("dot");
        for(let i = 0; i < dots.length; i++){
            dots[i].classList.remove("active");
        }
        dots[currentIndex].classList.add("active");
    }

    function goToSlide(index){
        currentIndex = index;
        updateSlider();
    }

    window.nextCar = function(){
        currentIndex = (currentIndex + 1) % totalItems;
        updateSlider();
    };

    window.prevCar = function(){
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateSlider();
    };

    createDots();
});
