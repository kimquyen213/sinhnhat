function playMusic() {
  document.getElementById('birthdaySong').play();
  alert("Yêu ông xẽee nhiều lắm lunn 💖");
  launchFireworks(); // Gọi pháo hoa nổ
}

// Trái tim bay liên tục
setInterval(function() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + "vw"; // Tạo vị trí ngẫu nhiên
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s"; // Thời gian biến động từ 3s đến 5s
  document.getElementById('hearts').appendChild(heart);

  setTimeout(() => {
    heart.remove(); // Xóa trái tim sau khi hoàn thành animation
  }, 6000);
}, 300);

// Pháo hoa
function launchFireworks() {
  for (let i = 0; i < 30; i++) {
    setTimeout(createFirework, i * 100); // Tạo pháo hoa ngẫu nhiên
  }
}

function createFirework() {
  const firework = document.createElement('div');
  firework.className = 'firework';
  firework.style.left = Math.random() * 100 + "vw"; // Vị trí ngẫu nhiên theo chiều ngang
  firework.style.top = Math.random() * 100 + "vh"; // Vị trí ngẫu nhiên theo chiều dọc
  document.body.appendChild(firework);

  setTimeout(() => {
    firework.remove(); // Xóa pháo hoa sau khi animation hoàn thành
  }, 1000);
}
