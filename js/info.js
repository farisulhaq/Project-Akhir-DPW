const nama = sessionStorage.getItem("nama");
const nim = sessionStorage.getItem("nim");

document.querySelector('.nama').innerHTML = nama;
// document.querySelector('.name').innerHTML = nama;    
document.querySelector('.nim').innerHTML = nim;


// document.querySelector('.nama-s').innerHTML = nama;