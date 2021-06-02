const nama = sessionStorage.getItem("nama");
const nim = sessionStorage.getItem("nim");
const level = sessionStorage.getItem("jnsLevel");
const scor = sessionStorage.getItem("scor");

document.querySelector('.nama').innerHTML = nama;
document.querySelector('.nim').innerHTML = nim;
document.querySelector('.levelQuiz').innerHTML = level;
document.querySelector('.scorQuiz').innerHTML = scor;

