const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yeyy, lanjut chat yaa!";
  gif.src =
    "https://i.pinimg.com/originals/34/f3/75/34f3751cb6bd5257536abcb023fca035.gif";
 // Tambahkan alert di halaman kedua
 setTimeout(() => {
  const message = document.getElementById("message").innerText;
  alert(message + " - ditunggu loh!");
}, 2000); // Misalnya, alert muncul 2 detik setelah tombol "Boleh" diklik
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});