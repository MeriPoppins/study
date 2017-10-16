var open = document.querySelector (".login");
var popup = document.querySelector (".modal-content");
var close = popup.querySelector (".modal-content-close");
var form = popup.querySelector (".login-form");
var login = popup.querySelector ("[name=login]");
var password = popup.querySelector ("[name=password]");
var storage = localStorage.getItem ("login");
var mapOpen1 = document.querySelector (".js-open-map1");
var mapOpen = document.querySelector (".js-open-map");
var mapPopup = document.querySelector (".modal-content-map");
var mapClose = mapPopup.querySelector (".modal-content-close");
var overlay = document.querySelector (".modal-overlay");

open.addEventListener ("click", function(event) {
	event.preventDefault();
	popup.classList.add ("modal-content-show");
	overlay.classList.add ("modal-overlay-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener ("click", function(event) {
	event.preventDefault();
	popup.classList.remove ("modal-content-show");
	overlay.classList.remove ("modal-overlay-show");
});

form.addEventListener ("submit", function(event) {
	if (!login.value || !password.value) {
		event.preventDefault();
		console.log ("Нужно ввести логин и пароль");
	} else {
		localStorage.setItem ("login", login.value);
	}
});

mapOpen1.addEventListener ("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add ("modal-content-map-show");
	overlay.classList.add ("modal-overlay-show");
});

mapOpen.addEventListener ("click", function(event) {
	event.preventDefault();
	mapPopup.classList.add ("modal-content-map-show");
	overlay.classList.add ("modal-overlay-show");
});

mapClose.addEventListener ("click", function(event) {
	event.preventDefault();
	mapPopup.classList.remove ("modal-content-map-show");
	overlay.classList.remove ("modal-overlay-show");
});

overlay.addEventListener ("click", function(event) {
	event.preventDefault();
	popup.classList.remove ("modal-content-show");
	mapPopup.classList.remove ("modal-content-map-show");
	overlay.classList.remove ("modal-overlay-show");
});