let arr = {
	'menu': {
		'salads' : {
			'greek salad' : '5.99',
			'caesar salad' : '7.99'
		},
		'main dishes' : {
			'margkerite pizza' : '12.50',
			'tomato soup' : '6.99',
			'surger' : '10.00'
		},
		'desserts' : {
			'cheesscake' : '4.99',
			'chocolate ise-cream' : '2.50',
			'fruit saled' : '3.99'
		},
		'drinks' : {
			'lemonade' : '3.20',
			'green tea' : '1.50',
			'coffee' : '1.99'
		}
	}
}

let menu;
menu = returnMenu(arr.menu);
//menu = makeMapNew(arr);

console.log(menu);

let elem = document.querySelector('#menu');
let render = '<div class="menu-title">Menu</div>';
for(let sub of menu.keys()) {
	render += `<div class="sub"><div class="sub-title">${sub}</div>`;
	for(let item of menu.get(sub).entries()) {	
		render += `<div class="sub-item"><div class="sub-item-title">${item[0]}</div><div class="sub-item-price">$ ${item[1]}</div></div>`;
	}
	render += '</div>';
}
elem.innerHTML = render;

function returnMenu(obj) {
	m = new Map();
	for(let key in obj) {
		m.set(key, (typeof(obj[key]) === 'object') ? returnSubMenu(obj[key]) : obj[key]);
	}
	return m;
}
 
function returnSubMenu(ob) {
	mm = new Map();
	for(let key in ob) {
		mm.set(key, (typeof(ob[key]) === 'object') ? returnSubMenu(ob[key]) : ob[key]);
	}
	return mm;
}
