let lastSlide = document.querySelectorAll(".slide2 ul li")
// 마지막 슬라이드 이미지넣기
for(let i=0; i<16; i++){
    lastSlide[i].style.backgroundImage= `url(./imges/sl${i+1}.jpg)`
}



// for(let i=0; i<200; i++){
//     const imgNode = document.createElement('img'); // imgNode라는 변수에 이미지태그 생성하는것
//     imgNode.setAttribute('src',`img/pic${i}.jpg`); // 이미지src속성과 속성값(사진이름)넣는것
//     main.append(imgNode); // 메인에 삽입
// } 
