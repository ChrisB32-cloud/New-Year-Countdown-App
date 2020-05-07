// 1 start
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

// 9
const year = document.getElementById('year');
//12
const loading = document.getElementById('loading');

// 3 get current year
const currentYear = new Date().getFullYear();

//2  hard code first, 4 temp literal current year + 1 to go to next year and so on
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// 10 Set background year
year.innerText = currentYear + 1;

// 5 update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  // Math.floor() will round down/ remove decimal

  // 7
  // d for days
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  // h for hours, % 24 will acount for days passed
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  // m for minutes
  const m = Math.floor(diff / 1000 / 60) % 60;
  // s f0r seconds
  const s = Math.floor(diff / 1000) % 60;
  //   console.log(d, h, m, s);

  // 8
  days.innerHTML = d < 10 ? '0' + d : d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// 6 call update count down
// updateCountdown();

// 11 show spinner before count down
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

// 8 to make sure this function runs every 1 second
setInterval(updateCountdown, 1000);
