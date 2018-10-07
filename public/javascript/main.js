let activateSpoke = function(spk, mainTxt) {
	spk.classList.remove("profileButton__info--borderInactive");
	spk.classList.add("profileButton__info--borderActive");
	if (mainTxt !== null && typeof mainTxt !== "undefined") {
		mainTxt.classList.remove("profileButton__info--inactive");
		mainTxt.classList.add("profileButton__info--active");
	}
};

let deActivateSpoke = function(spk, mainTxt) {
	spk.classList.remove("profileButton__info--borderActive");
	spk.classList.add("profileButton__info--borderInactive");
	if (mainTxt !== null && typeof mainTxt !== "undefined") {
		mainTxt.classList.remove("profileButton__info--active");
		mainTxt.classList.add("profileButton__info--inactive");
	}
};
profileButton__menu__back2 = document.getElementById(
	"profileButton__menu--back2"
);
profileButton__menu__back1 = document.getElementById(
	"profileButton__menu--back1"
);
spokeworkMain = document.getElementById("spoke__workMain");
spokeworkMainTxt = document.getElementById("spoke__workMainTxt");
spokework1 = document.getElementById("spoke__work1");
spokework2 = document.getElementById("spoke__work2");

spokehealthMain = document.getElementById("spoke__healthMain");
spokehealthMainTxt = document.getElementById("spoke__healthMainTxt");
spokehealth1 = document.getElementById("spoke__health1");
spokehealth2 = document.getElementById("spoke__health2");

spokerelMain = document.getElementById("spoke__relMain");
spokerelMainTxt = document.getElementById("spoke__relMainTxt");
spokerel1 = document.getElementById("spoke__rel1");
spokerel2 = document.getElementById("spoke__rel2");
$(window).scroll(function() {
	if ($(window).scrollTop() >= 1 * $(window).height()) {
		document
			.getElementById("profileButton")
			.classList.remove("animated__rightInvisible");
		document
			.getElementById("profileButton")
			.classList.add("animated__leftVisible");
	} else if ($(window).scrollTop() <= 1 * $(window).height()) {
		console.log("2");
		document
			.getElementById("profileButton")
			.classList.remove("animated__leftVisible");
		document
			.getElementById("profileButton")
			.classList.add("animated__rightInvisible");
	}
	if (
		$(window).scrollTop() >= 1 * $(window).height() &&
		$(window).scrollTop() <= 2 * $(window).height()
	) {
		console.log("3");
		activateSpoke(spokework1);
		activateSpoke(spokeworkMain);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);
		deActivateSpoke(spokehealth2);

		deActivateSpoke(spokerelMain);
		deActivateSpoke(spokerel1);
		deActivateSpoke(spokerel2);
	}
	if (
		$(window).scrollTop() >= 2 * $(window).height() &&
		$(window).scrollTop() <= 3 * $(window).height()
	) {
		console.log("4");
		activateSpoke(spokework2);
		activateSpoke(spokeworkMain, spokeworkMainTxt, spokeworkMainTxt);
		deActivateSpoke(spokework1);

		deActivateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);
		deActivateSpoke(spokehealth2);

		deActivateSpoke(spokerelMain, spokerelMainTxt, spokerelMainTxt);
		deActivateSpoke(spokerel1);
		deActivateSpoke(spokerel2);
	}
	if (
		$(window).scrollTop() >= 3 * $(window).height() &&
		$(window).scrollTop() <= 4 * $(window).height()
	) {
		console.log("5");
		activateSpoke(spokehealth1);
		activateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth2);

		deActivateSpoke(spokeworkMain, spokeworkMainTxt);
		deActivateSpoke(spokework1);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokerelMain, spokerelMainTxt);
		deActivateSpoke(spokerel1);
		deActivateSpoke(spokerel2);
	}
	if (
		$(window).scrollTop() >= 4 * $(window).height() &&
		$(window).scrollTop() <= 5 * $(window).height()
	) {
		console.log("5");
		activateSpoke(spokehealth2);
		activateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);

		deActivateSpoke(spokeworkMain, spokeworkMainTxt);
		deActivateSpoke(spokework1);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokerelMain, spokerelMainTxt);
		deActivateSpoke(spokerel1);
		deActivateSpoke(spokerel2);
	}
	if (
		$(window).scrollTop() >= 5 * $(window).height() &&
		$(window).scrollTop() <= 6 * $(window).height()
	) {
		console.log("6");
		activateSpoke(spokerel1);
		activateSpoke(spokerelMain, spokerelMainTxt);
		deActivateSpoke(spokerel2);

		deActivateSpoke(spokeworkMain, spokeworkMainTxt);
		deActivateSpoke(spokework1);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);
		deActivateSpoke(spokehealth2);
	}
	if (
		$(window).scrollTop() >= 6 * $(window).height() &&
		$(window).scrollTop() <= 7 * $(window).height()
	) {
		console.log("7");
		activateSpoke(spokerel2);
		activateSpoke(spokerelMain, spokerelMainTxt);
		deActivateSpoke(spokerel1);

		deActivateSpoke(spokeworkMain, spokeworkMainTxt);
		deActivateSpoke(spokework1);
		deActivateSpoke(spokework2);

		deActivateSpoke(spokehealthMain, spokehealthMainTxt);
		deActivateSpoke(spokehealth1);
		deActivateSpoke(spokehealth2);
	}
});

let moveTo = function(el) {
	$([document.documentElement, document.body]).animate(
		{
			scrollTop: $("#" + el).offset().top
		},
		1000
	);
};
let moveNavTo = function(el) {
	profileButton__menu__back1.classList.add("animated__closeFull1");

	profileButton__menu__back2.classList.add("animated__closeFull2");
	setTimeout(() => {
		document
			.getElementById("profileMenuButton")
			.classList.remove("util__visibilityVisible");
		document
			.getElementById("profileMenuButton")
			.classList.add("util__visibilityHidden");
		profileButton__menu__back1.classList.remove("animated__openFull1");
		profileButton__menu__back2.classList.remove("animated__openFull2");
		moveTo(el);
		document.body.classList.remove("util__overflowHidden");
	}, 2000);
};
let profileOpened = false;
let profileClick = function() {
	if (!profileOpened) {
		profileOpened = true;
		moveTo("hero");
		profileButton__menu__back1.classList.remove("animated__closeFull1");
		profileButton__menu__back1.classList.add("animated__openFull1");
		profileButton__menu__back2.classList.remove("animated__closeFull2");
		profileButton__menu__back2.classList.add("animated__openFull2");
		document.body.classList.add("util__overflowHidden");
		setTimeout(() => {
			document
			.getElementById("profileMenuButton")
			.classList.remove("util__visibilityHidden");
		document
			.getElementById("profileMenuButton")
			.classList.add("util__visibilityVisible");	
		}, 2000);
		
	} else {
		profileOpened = false;
		profileButton__menu__back1.classList.remove("animated__openFull1");
		profileButton__menu__back1.classList.add("animated__closeFull1");
		profileButton__menu__back2.classList.remove("animated__openFull2");
		profileButton__menu__back2.classList.add("animated__closeFull2");
		document.body.classList.remove("util__overflowHidden");
		document
			.getElementById("profileMenuButton")
			.classList.remove("util__visibilityVisible");
		document
			.getElementById("profileMenuButton")
			.classList.add("util__visibilityHidden");
	}
};
