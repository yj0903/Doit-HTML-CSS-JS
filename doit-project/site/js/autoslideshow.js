var current = 0;
showSlides();

function showSlides(){
    var slides = document.querySelectorAll("#slides > img");
    
    // 모든 이미지 감춤
    for (let i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    
    // 다음 이미지로 이동
    current++;
    if(current > slides.length){
        current = 1;
    }
    slides[current-1].style.display = "block";
    
    //재귀함수로 무한반복 수행.
    setTimeout(showSlides, 2000);
}