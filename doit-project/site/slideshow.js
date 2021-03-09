
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
    for (var i = 0; i<slides.length; i++)
        slides[i].style.display = "none";
    slides[n].style.display = "block";
}
function prevSlide(){
    if(current
        
        )

}
function nextSlide(){
}