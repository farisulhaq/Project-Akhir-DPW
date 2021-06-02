const soalLN = document.querySelector('header .title'); // mengambil elemet header yang mempunyai class title
const soalQuiz = document.querySelector('.quiz_text'); // mengambil elemet pada class quiz_text (tempat soal)
const optionQuiz = document.querySelector('.quiz_option'); // mengambil elemet pada class quiz_option (tempat pilihan)
const waktu = document.querySelector('.timer_sec'); // mengambil elemet pada class time_sec (waktu)
const waktu_line = document.querySelector('header .time_line'); // mengambil elemet pada class time_sec (waktu)
const nama = sessionStorage.getItem("nama");
const nim = sessionStorage.getItem("nim");

let temp = 0; // buat random soal
let scor = 0; // buat scor
let currentQuiz; // ambil element soal pilahan dan answer
let kuis = []; // tempat soal
let acak = []; // acak angka supaya nanti soalnya teracak
let counter; // membuat setInterval 
let waktuQuiz; // waktu kuis
let counterLine; // membuat setInterval 
let waktuLine = 0; // waktu line kuis
let lineWidth; 

function setKuis() {
    document.querySelector('.nama').innerHTML = nama;
    document.querySelector('.nim').innerHTML = nim;
    const level = sessionStorage.getItem("level");
    let totalQuiz;
    let soal;
    if (level === "true") {
        sessionStorage.setItem("jnsLevel","Level One");
        totalQuiz = quiz_level1.length;
        soal = quiz_level1;
        waktuQuiz = 15;
        lineWidth = 31;
    } else {
        sessionStorage.setItem("jnsLevel","Level Two");
        totalQuiz = quiz_level2.length;
        soal = quiz_level2;
        waktuQuiz = 5;
        lineWidth = 11;
    }
    // buat index soal acak
    while (acak.length < totalQuiz) {
        let random = Math.floor(Math.random() * totalQuiz); // mengacak angka
        // cek angka apa ada yang sama, jika sama maka akan di continue 
        if (acak.indexOf(random) > -1) {
            continue;
        }
        // jika angka tidak sama maka akan di push ke array acak
        acak.push(random);
    }
    console.log(acak)
    // mengambil soal dan menyimpannya di variabel kuis
    for (let i = 0; i < totalQuiz; i++) {
        // push quiz ke array kuis
        kuis.push(soal[i]);
    }
    console.log(kuis)
}

function nextQuiz(){
    // mengam Element kesuluruhan index persoal 
    currentQuiz = kuis[acak[temp]]
    // mencetak nomer soal sampai banyak soal
    soalLN.innerHTML = '<span>' + (temp+1) + ' Of ' + kuis.length + ' Question';
    // mencetak soal 
    soalQuiz.innerHTML = `<span class="quiz">${temp+1}. ${currentQuiz.soal}</span>`
    // mencetak jawaban menggunakan for
    const optionLN = currentQuiz.pilih.length;
    optionQuiz.innerHTML = ""; // membuat element div wuiz option text contentnya menjadi "kosong" 
    for (let i = 0; i < optionLN; i++) {
        const spn = document.createElement('span'); // membuat elemen span
        const option = document.createElement('div'); // membuat element div
        spn.innerHTML = currentQuiz.pilih[i]; // menuliskan pada elemet span
        option.appendChild(spn); // menyimpan element span ke-dalam element div
        option.id = i; // memberikan id pada element div
        option.className = "option"; // memberikan class pada element div
        option.setAttribute("onclick", "nxQuiz(this)") // memberikan atribut onclick pada element div
        optionQuiz.appendChild(option); // menyimpan element div option ke div quiz option
    }
}

function nxQuiz(Element){
    let answer = parseInt(Element.id);
    console.log(answer,currentQuiz.jawab);
    if (answer === currentQuiz.jawab) {
        scor += 3.33;
        console.log(scor);
    } else {
        console.log("salah");
    }
    if (temp < kuis.length-1) {
        temp++;
        clearInterval(counter);
        starTimer(waktuQuiz);
        clearInterval(counterLine);
        lineTimer(waktuLine);
        nextQuiz();
    } else {
        sessionStorage.setItem("scor", Math.ceil(scor));
        location.href = "hasil.html";
    }
}

function starTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        waktu.innerHTML = time;
        // consolelog(time);
        console.log(time)

        time--;
        if (time < 9) {
            let zero = waktu.innerHTML;
            waktu.innerHTML = "0" + zero;
        }
        if (time < 0) {
            // clearInterval(counter);
            nxQuiz(Element);
        }

    }
}

function lineTimer(time) {
    counterLine = setInterval(timer, lineWidth);
    function timer() {
        time++;
        waktu_line.style.width = time + "px";
        if (time > 499) {
            clearInterval(counterLine);
        }
    }
}

window.onload = () => {
    setKuis();
    nextQuiz();
    starTimer(waktuQuiz);
    lineTimer(waktuLine);
}

