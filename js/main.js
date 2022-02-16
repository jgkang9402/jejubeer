// window.addEventListener("load", () => {
    
let slides = document.querySelector(".slides",".slides2");
let slideList = document.querySelectorAll(".slides li",".slides2 li");
let currentIdx = 0;
let slideLength = slideList.length;
let slideWidth = 1000;
let slideMargin = 0;
let nextbtn = document.querySelector(".ri");
let prevbtn = document.querySelector(".li");

// console.log(slideLength)
// console.log(slides)
console.log(slideList)
// console.log(currentIdx)
// console.log(slideWidth)
// console.log(slideMargin)
// console.log(prevbtn)
// console.log(nextbtn)

function makeClone() {
    for (let i = 0; i < slideLength; i++) {
        // console.log(i)
        let cloneSlide = slideList[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide)
        // console.log(cloneSlide)
    }

    for (let i = slideLength - 1; i >= 0; i--){
        let cloneSlide = slideList[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide)
    }

    updateWidth();
    setSlideTotalWidth();

    setTimeout(function(){
        slides.classList.add('animated');
    },100)


};


function updateWidth() {
    let currentSlides = document.querySelectorAll(".slides li",".slides2 li")
    let newSlideCount = currentSlides.length

    let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin +"px";

    slides.style.width = newWidth;
}


function setSlideTotalWidth(){
    let slideTotalWidth = -(slideWidth + slideMargin) * slideLength
    slides.style.transform = `translateX(${slideTotalWidth}px)`
    
    
}

nextbtn.addEventListener('click', function () {
    moveSlide(currentIdx + 1); // 클릭시 moveSlide라는 함수에 숫자를 넘겨주는것
});
prevbtn.addEventListener('click', function () {
    moveSlide(currentIdx - 1); // 클릭시 moveSlide라는 함수에 숫자를 넘겨주는것
});


function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin) + "px"
    currentIdx = num;
    console.log(currentIdx,slideLength)

    if (currentIdx == slideLength || currentIdx == -slideLength){
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left ='0px';
            currentIdx = 0
        },500);
        setTimeout(function(){
            slides.classList.add('animated');

        },550);

    }


}


makeClone()
// }); ///////// load ////////////