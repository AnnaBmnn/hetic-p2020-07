import { User } from './user';

console.log('Welcome !');

let name = 'Bastien';
const user = new User(name);

let container = document.querySelector('.container'),
	viewer = document.querySelector('.viewer'),
	translateX = 0;


window.addEventListener('mousewheel', function(e){
	//cancel the horizotal scroll
	e.preventDefault();

	//change value of the deplacement 
	translateX += e.deltaY;
	window.scrollTo(translateX, 0);


}, false);
