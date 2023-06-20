
export function clearState(){
}


// export function preventScroll(myElement, show) {
//     const element = document.getElementById("basic-navbar-nav");
//     const body = document.body;

//     if (element.classList.contains("show")) {
//         body.classList.add("mobile-menu-open");
//     } else {
//         body.classList.add("mobile-menu-close");
//     };
// }

// function collapsingMenu() {
//     const elementTrigger = document.getElementById("basic-navbar-nav");
// 	const mobileBars = document.getElementById('mobile-bars');
// 	const mobileCross = document.getElementById('mobile-cross');
//     elementTrigger.classList.remove("show");
// 	document.body.classList.remove("mobile-menu-open");
// 	mobileBars.classList.remove('hidden-hamburger-menu');
// 	mobileCross.classList.add('hidden-cross-menu');
// }

// function iconSwap() {
// 	const mobileMenuState = document.getElementById('basic-navbar-nav');
// 	const mobileBars = document.getElementById('mobile-bars');
// 	const mobileCross = document.getElementById('mobile-cross');
	
// 	if (!mobileMenuState.classList.contains('show')) {
// 		mobileBars.classList.toggle('hidden-hamburger-menu');
// 		mobileCross.classList.remove('hidden-cross-menu');
// 	} else {
// 		mobileBars.classList.remove('hidden-hamburger-menu');
// 		mobileCross.classList.toggle('hidden-cross-menu');
// 	}
// }


// function preventScrolling() {
// 	const mobileMenuState = document.getElementById('basic-navbar-nav');
// 	if (!mobileMenuState.classList.contains('show')) {
// 		document.body.classList.add('mobile-menu-open');
// 	} else {
// 		document.body.classList.remove('mobile-menu-open');
// 	}
// 	iconSwap();
// }