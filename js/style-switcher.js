
// ----------toggle style switcher----------

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () =>{
	document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll", () =>{
	if (document.querySelector(".style-switcher").classList.contains("open")) {
		document.querySelector(".style-switcher").classList.remove("open");
	}
})

// ***Note***----------If Theme & mode = reset on reloading screen {Turn on section A}
// else = keep selection {Turn on Section B}----------***Note***

									// ----------Section A----------

// ----------theme colors----------

// const alternateStyles = document.querySelectorAll(".alternate-style");

// function setActiveStyle(color) {
// 	alternateStyles.forEach((style) =>{
// 		if (color === style.getAttribute("title")) {
// 			style.removeAttribute("disabled");
// 		}
// 		else{
// 			style.setAttribute("disabled", "true");
// 		}
// 	})
// }

// ---------- Theme light and dark mode ----------

// const dayNight = document.querySelector(".day-night");

// dayNight.addEventListener("click", () =>{
// 	dayNight.querySelector("i").classList.toggle("fa-sun");
// 	dayNight.querySelector("i").classList.toggle("fa-moon");
// 	document.body.classList.toggle("dark");
// })

//  window.addEventListener("load", () =>{
//  	if (document.body.classList.contains("dark")) {
//  		dayNight.querySelector("i").classList.add("fa-sun");
//  	}
//  	else{
//  		dayNight.querySelector("i").classList.add("fa-moon");
//  	}
//  })


										// ----------Section B----------

// ----------theme colors----------

	const alternateStyles = document.querySelectorAll(".alternate-style");

	function setActiveStyle(color) {
		localStorage.setItem("color",color);
		changeColor();
	}

	function changeColor(){
		alternateStyles.forEach((style) =>{
			if (localStorage.getItem("color") === style.getAttribute("title")) {
				style.removeAttribute("disabled");
			}
			else{
				style.setAttribute("disabled","true");
			}
		})
	}

// Checking if 'color' key exists
	if (localStorage.getItem("color") !== null) {
		changeColor();
	}

	// ---------- Theme light and dark mode ----------
	const dayNight = document.querySelector(".day-night");

	dayNight.addEventListener("click", () =>{
		document.body.classList.toggle("dark");
		if (document.body.classList.contains("dark")) {
			localStorage.setItem("theme","dark");
		}
		else{
			localStorage.setItem("theme","light")
		}
		updateIcon();
	})

	function themeMode(){
		// checking if 'theme' key exists
		if (localStorage.getItem("theme") !== null) {
			if (localStorage.getItem("theme") === "light") {
				document.body.classList.remove("dark");
			}
			else{
				document.body.classList.add("dark");
			}
		}
		updateIcon();
	}
	themeMode();
	function updateIcon(){
		if (document.body.classList.contains("dark")) {
			dayNight.querySelector("i").classList.remove("fa-moon");
			dayNight.querySelector("i").classList.add("fa-sun");
		}
		else{
			dayNight.querySelector("i").classList.remove("fa-sun");
			dayNight.querySelector("i").classList.add("fa-moon");
		}
	}