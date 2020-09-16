OnClick(get('#theme'), () => {
	let body = get('body');
	if (body.classList.value == 'dark') body.classList.replace('dark', 'light');
	else body.classList.replace('light', 'dark');
});

getAll('.card-header').forEach((head) => {
	OnClick(head, () => {
		if (head.classList.value == 'card-header active') {
			head.classList.remove('active');
		} else {
			head.classList.add('active');
		}
	});
});

// FUNCTION

// AddEventListener easily
function OnClick(el, func) {
	if (el) el.addEventListener('click', func);
}

// search for Element easily
function get(tag) {
	return document.querySelector(tag);
}

function getAll(tag) {
	return document.querySelectorAll(tag);
}
