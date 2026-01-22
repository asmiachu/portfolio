// Toggle Mobile Menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
	navLinks.classList.toggle('active');
	
	if (navLinks.classList.contains('active')) {
		menuIcon.classList.remove('fa-bars');
		menuIcon.classList.add('fa-times');
	} else {
		menuIcon.classList.remove('fa-times');
		menuIcon.classList.add('fa-bars');
	}
});

// Typing Effect - Tech Style
const textElement = document.querySelector('.typing-text');
const words = ["Engineer", "Developer", "Prompt_Eng", "Java_Expert", "Learner"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
	const currentWord = words[wordIndex];
	const currentChars = currentWord.substring(0, charIndex);
	
	textElement.textContent = currentChars;

	// Speed Logic
	let typeSpeed = 100;
	if (isDeleting) typeSpeed = 50;

	if (!isDeleting && charIndex < currentWord.length) {
		charIndex++;
		setTimeout(typeEffect, typeSpeed);
	} else if (isDeleting && charIndex > 0) {
		charIndex--;
		setTimeout(typeEffect, typeSpeed);
	} else {
		isDeleting = !isDeleting;
		if (!isDeleting) {
			wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
		}
		setTimeout(typeEffect, 1500); // Pause before deleting
	}
};

document.addEventListener('DOMContentLoaded', typeEffect);

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		navLinks.classList.remove('active');
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			window.scrollTo({
				top: target.offsetTop - 80,
				behavior: "smooth"
			});
		}
	});
});