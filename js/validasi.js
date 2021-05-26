// Login Html
function login(e) {
    e.preventDefault();
    const nama = document.querySelector('#name').value;
    const nim = document.querySelector('#nim').value;
    sessionStorage.setItem("nama",nama);
    sessionStorage.setItem("nim",nim); 
    if (validasi()) {
        location.href = "panduan.html";   
    }
    
}
function validasi() {
    const nama = document.querySelector('#name');
    const nim = document.querySelector('#nim');
    let namaErr = "";
    let nimErr = "";
    if (nama.value == "") {
        namaErr = "Anda Belum mengisi Nama";
        nama.style.border = "2px solid red";
        document.querySelector("#namaErr").innerHTML = namaErr;
    }
    if (nim.value == "") {
        nimErr = "Anda Belum mengisi NIM";
        nim.style.border = "2px solid red";
        document.querySelector("#nimErr").innerHTML = nimErr;
    }
    if ((namaErr != "") || (nimErr != "")) {
        return false;
    }
    else {
        return true;
    }
}

function hpsErr(id,eror) {
    document.getElementById(eror).innerHTML = "";
    document.getElementById(id).style.border = "";
}
// Panduan Html
const exit = document.querySelector('.container .exit');
const next = document.querySelector('.container .next');

exit.onclick = () => {
    location.href = "index.html";
}
next.onclick = () => {
    location.href = "level.html";
}
// level html klik start
function mulai() {
    const lvl1 = document.querySelector('#lvl1');
    sessionStorage.setItem("level",lvl1.checked)
    location.href = "quiz.html";
}


