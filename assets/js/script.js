const nav = document.querySelector('.nav');
const navBg = document.querySelector('.responsive-nav');

function openNav() {
	nav.style.display = 'block';
	navBg.style.display = 'block';
}

function closeNav() {
	nav.style.display = 'none';
	navBg.style.display = 'none';
};