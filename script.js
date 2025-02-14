// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
	// Remove preloader
	setTimeout(() => {
		document.querySelector('.preloader').style.opacity = '0';
		setTimeout(() => {
			document.querySelector('.preloader').style.display = 'none';
		}, 500);
	}, 1500);

	// Love counter
	const startDate = new Date('2022-10-03').getTime();
	setInterval(() => {
		const now = new Date().getTime();
		const distance = now - startDate;

		document.querySelector('.days').textContent = Math.floor(
			distance / (1000 * 60 * 60 * 24)
		);
		document.querySelector('.hours').textContent = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		document.querySelector('.minutes').textContent = Math.floor(
			(distance % (1000 * 60 * 60)) / (1000 * 60)
		);
		document.querySelector('.seconds').textContent = Math.floor(
			(distance % (1000 * 60)) / 1000
		);
	}, 1000);

	initializeHearts();
	initializeParticles();
});

function flipCard() {
	const card = document.getElementById('valentineCard');
	card.classList.toggle('is-flipped');
}

function sendWhatsApp() {
	const message = document.querySelector('.message-input').value;
	if (message.trim()) {
		// Ganti nomor WhatsApp di bawah ini dengan nomor yang diinginkan
		const phoneNumber = '6282363134083'; // Format: kode negara tanpa + diikuti nomor
		const encodedMessage = encodeURIComponent(message);
		const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

		window.open(whatsappURL, '_blank');

		showToast('Message sent with love! ❤️');
		createHeartBurst(document.querySelector('.send-love'));
		document.querySelector('.message-input').value = '';
	}
}

function initializeHearts() {
	setInterval(() => {
		const heart = document.createElement('div');
		heart.className = 'floating-heart';
		heart.innerHTML = '❤️';
		heart.style.left = Math.random() * 100 + 'vw';
		heart.style.animationDuration = Math.random() * 3 + 2 + 's';
		document.querySelector('.floating-hearts').appendChild(heart);
		setTimeout(() => heart.remove(), 5000);
	}, 300);
}

function initializeParticles() {
	const container = document.querySelector('.particles');
	for (let i = 0; i < 50; i++) {
		const particle = document.createElement('div');
		particle.className = 'particle';
		particle.style.left = Math.random() * 100 + 'vw';
		particle.style.top = Math.random() * 100 + 'vh'; // Tambahkan posisi top
		particle.style.opacity = Math.random(); // Variasi transparansi
		particle.style.animationDelay = Math.random() * 3 + 's';
		container.appendChild(particle);
	}
}

function createHeartBurst(element) {
	for (let i = 0; i < 15; i++) {
		const heart = document.createElement('div');
		heart.className = 'burst-heart';
		heart.style.setProperty('--angle', i * 24 + 'deg');
		element.appendChild(heart);
		setTimeout(() => heart.remove(), 1000);
	}
}

function showToast(message) {
	const toast = document.createElement('div');
	toast.className = 'toast';
	toast.textContent = message;
	document.querySelector('.toast-container').appendChild(toast);
	setTimeout(() => toast.remove(), 3000);
}
