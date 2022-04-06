const form = document.querySelector('#member');
const btnSubmit = form.querySelector('input[type=submit]');

btnSubmit.addEventListener('click', e => {
    if (!isTxt('userid', 5)) e.preventDefault(); // 5는 5글자 이상쓰라고하기위해 사용
    if (!isTxt('comments', 10)) e.preventDefault(); // 10도 마찬가지로 10글자 이상쓰게하기위해
    if (!isEmail('email', 10)) e.preventDefault();
    if (!isCheck('gender')) e.preventDefault();
    if (!isCheck('hobby')) e.preventDefault();
    if (!isSelect('beerType')) e.preventDefault();
    if (!isPwd('pwd1', 'pwd2', 5)) e.preventDefault();
})

function isTxt(name, len) { //아이디,코멘트
    const input = form.querySelector(`[name=${name}]`);
    const txt = input.value;
    // console.log(txt)

    if (txt.length > len) {
        const errMsgs = input.closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();
        return true;
    } else {
        const errMsgs = input.closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

        const errMsg = document.createElement('p');
        errMsg.append(`텍스트를 ${len}글자이상 입력하세요`);
        input.closest('td').append(errMsg);

        return false;
    }
}

function isEmail(name, len) { // 이메일
    const input = form.querySelector(`[name=${name}]`);
    const txt = input.value;

    if (txt.length > len && /@/.test(txt)) {
        const errMsgs = input.closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

        return true;
    } else {
        const errMsgs = input.closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) input.closest('td').querySelector('p').remove();

        const errMsg = document.createElement('p');
        errMsg.append(`@를 포함한 메일주소를 ${len}글자 이상 입력하세요.`);
        input.closest('td').append(errMsg);

        return false;
    }
}

function isCheck(name) { // 체크박스
    const inputs = form.querySelectorAll(`[name=${name}]`);
    let isChecked = false;

    for (let input of inputs)
        if (input.checked) isChecked = true;

    if (isChecked) {
        const errMsgs = inputs[0].closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();

        return true;
    } else {
        const errMsgs = inputs[0].closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) inputs[0].closest('td').querySelector('p').remove();

        const errMsg = document.createElement('p');
        errMsg.append('필수 입력항목을 하나이상 체크해주세요.');
        inputs[0].closest('td').append(errMsg);

        return false;
    }
}

function isSelect(name) { //셀렉트박스
    const sel = form.querySelector(`[name=${name}]`);
    const sel_index = sel.options.selectedIndex;
    const val = sel.options[sel_index].value;

    if (val !== '') {
        const errMsgs = sel.closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) sel.closest('td').querySelector('p').remove();

        return true;
    } else {
        const errMsgs = sel.closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) sel.closest('td').querySelector('p').remove();

        const errMsg = document.createElement('p');
        errMsg.append('항목을 선택해주세요.');
        sel.closest('td').append(errMsg);

        return false;
    }
}

function isPwd(name1, name2, len) { // 비밀번호
    const pwd1 = form.querySelector(`[name=${name1}]`);
    const pwd2 = form.querySelector(`[name=${name2}]`);
    const pwd1_val = pwd1.value;
    const pwd2_val = pwd2.value;

    const num = /[0-9]/; // 숫자는 모든게 0~9로만들어지니까 이렇게작성
    const eng = /[a-zA-Z]/; // 소문자,대문자 다포함해야함
    const spc = /[!@#$%^&*()_+=\[\]]/ // 특수문자는 노가다로 다써야함. []같은경우는 백슬래쉬\써서 구분해줘야함

    if (pwd1_val === pwd2_val && pwd1_val.length > len && num.test(pwd1_val) && eng.test(pwd1_val) && spc.test(pwd1_val)) { // 비밀번호 조건식
        const errMsgs = pwd1.closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) pwd1.closest('td').querySelector('p').remove();

        return true;
    } else {
        const errMsgs = pwd1.closest('td').querySelectorAll('p');
        if (errMsgs.length > 0) pwd1.closest('td').querySelector('p').remove();

        const errMsg = document.createElement('p');
        errMsg.append(`비밀번호는 ${len}글자 이상, 영문, 숫자, 특수문자를 모두 포함해서 동일하게 입력하세요.`)
        pwd1.closest('td').append(errMsg);
        return false;
    }
}