let mid = document.querySelector('#mid');
let mpw = document.querySelector('#mpw');

document.querySelector('#sbtn').addEventListener('click', function (e) {
    const txt = mid.value;
    const psw = mpw.value;


    if (txt.length == 0 || psw.length == 0){
        alert("아이디와 비밀번호 모두 입력해 주세요!")
        e.preventDefault();
    } else if (txt.length < 5 || psw.length < 5) {
        alert("아이디와 비밀번호는 5글자 이상입니다!")
        e.preventDefault();
    }

})

