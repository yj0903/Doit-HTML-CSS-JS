
// id를 따로 정하지 않았을 땐
// slides 안에 있는 img들만 갖고오도록 범위설정.
// 이미지 여러개니까 배열로 들어옴.
var slides = document.querySelectorAll("#slides > img");

// id가 있을 땐 id로 불러옴.
var prev = document.getElementById("prev");
var next = document.getElementById("next");

//현재 이미지 번호를 저장해야 순서대로 이미지 불러올 수 있음.
var current = 0;
showSlides(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlides(n){
    // 모든 이미지 안보이게 설정
    for (var i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    // 현재 N번 이미지만 보이도록 설정.
    slides[n].style.display = "block";
}
function prevSlide(){
    if(current > 0) current-=1;
    else current = slides.length-1;
    showSlides(current);
}
function nextSlide(){
    if(current < slides.length-1) current++;
    else current = 0;
    showSlides(current);
}