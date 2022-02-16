/* 
<div class="slide1 smls">
    <ul class="slide_imgbox2">
        <li><a href=""><img src="./imges/pellong4.jpg" alt=""></a></li>
        <li><a href=""><img src="./imges/pellong1.png" alt=""></a></li>
        <li><a href=""><img src="./imges/pellong2.jpg" alt=""></a></li>
        <li><a href=""><img src="./imges/pellong3.jpg" alt=""></a></li>
        <li><a href=""><img src="./imges/pellong4.jpg" alt=""></a></li>
    </ul>
    <span class="sri"><img src="./imges/slide2.png" alt="ribtn"></span>
    <span class="sli"><img src="./imges/slide1.png" alt="libtn"></span>
</div>
*/

window.addEventListener("load", function () {
    let slide = document.querySelectorAll(".slide_imgbox2");
    let slideList = document.querySelectorAll(".slide_imgbox2 li");
    let nbtn = document.querySelectorAll(".sri");
    let pbtn = document.querySelectorAll(".sli");
    let slideLength = slide.length;

    
    console.log(slide)
    console.log(slideLength)


    const goSlide = (dir, seq) => {
        console.log("go",dir,seq)
        // seq가 각 슬라이드의 순번임
        // dir은 버튼구분(1-오른쪽,0-왼쪽)


        if(dir){
            // slide[seq].style.left = "-245px";
            slide[seq].style.transition = "5s";

            this.setTimeout(()=>{
                slide[seq].appendChild(slide[seq].querySelector("li"))
                // slide[seq].style.left = "-245px";
                slide[seq].style.transition = "3s";
            },10)
        } else {
            slide[seq].insertBefore(
                slide[seq].querySelectorAll("li")[7],
                slide[seq].querySelectorAll("li")[0]);
            // slide[seq].style.left = "-245px"
            // slide[seq].style.transition = "2s";
            
            this.setTimeout(()=>{
                // slide[seq].style.left = "-245px";
                // slide[seq].style.transition = "8s";
            },10)
        }

    }

    for(let i = 0; i < nbtn.length; i++){
        nbtn[i].onclick = () => {
            goSlide(1,i);
        }
    }
    for (let i = 0; i < pbtn.length; i++) {
        pbtn[i].onclick = () => {
            goSlide(0, i);
        }
    }




})