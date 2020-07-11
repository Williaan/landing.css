
// SCRIPT: ANIMATION MENU BAR

var navToggle = document.querySelector('.menu-toggle');
var navMenu = document.querySelector('.menu-nav');
function openMenu(){
	navToggle.classList.toggle('animation');
	navMenu.classList.toggle('openMenu');
}
navMenu.addEventListener('click', openMenu);

// SCRIPT: WORK GALLERY 01

const linkfilter = document.querySelector('.works-links').children;
const items = document.querySelector('.works-container--photos').children;

for(let i = 0; i < linkfilter.length; i++){
	linkfilter[i].addEventListener('click', function(){
		for(let j = 0; j < linkfilter.length; j++){
			linkfilter[j].classList.remove('active');  // remove active button
		}
		this.classList.add('active'); // add active button

		var target = this.getAttribute('data-target')
		for(let k = 0; k < items.length; k++){
			items[k].style.display = 'none';
			if (target == items[k].getAttribute("data-id")) {
				items[k].style.display = 'block';
			}
			if (target == 'all') {
				items[k].style.display = 'block'
			}
		}
	})
}
const closebox = document.querySelector('.close-box');
const lightBox = document.querySelector('.lightBox');
const lightBoxImg = lightBox.querySelector('img');

	lightBox.addEventListener('click', function(){
		if (event.target != lightBoxImg) {
			lightBox.classList.remove('show')
			lightBox.classList.add('hide')
		}
		
	})
	closebox.addEventListener('click', function(){
		lightBox.classList.remove('show');
		lightBox.classList.add('hide');

	})

const gallery = document.querySelector('.works-container--photos');
const galleryItem = document.querySelectorAll('.works-container--photo');

galleryItem.forEach(function(element){
	element.querySelector('.fa-search').addEventListener('click', function(){
		lightBox.classList.remove('hide');
		lightBox.classList.add('show');
		lightBoxImg.src = element.querySelector('img').getAttribute('src');
	})
})
