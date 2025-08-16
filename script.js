// Geri sayım için doğum günü tarihi 17 Ağustos olarak ayarlandı.
const birthdayDate = new Date('2025-08-17T00:00:00').getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // Zaman hesaplamaları
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML elemanlarını güncelle
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

    // Eğer geri sayım bittiyse
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "<span>Doğum günün kutlu olsun Abi</span>";
        document.getElementById('title').innerText = "Doğum Günün Kutlu Olsun Abi";
        const sections = document.querySelectorAll('.section');
        sections.forEach(sec => sec.style.display = 'block');
    }
}, 1000);