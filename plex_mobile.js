/* SCRIPT DESCRIPTION
1) Waits for the page to finish loading 
2) Set webpage's viewport scale to 1 (prevents the page from being tiny)
3) Adds jQuery to the page (for convenience of writing this script)
3) If the searchbar is currently being typed into (is selected), hide everything to the right of the searchbar
*/

/* Helper function for waiting for an element to exist before proceeding */
function elementReady(selector) {
	return new Promise((resolve, reject) => {
		let el = document.querySelector(selector);
		if (el) {
			resolve(el);
		}
		new MutationObserver((mutationRecords, observer) => {
				// Query for elements matching the specified selector
				Array.from(document.querySelectorAll(selector)).forEach((element) => {
					resolve(element);
					// Once we have resolved we don't need the observer anymore.
					observer.disconnect();
				});
			})
			.observe(document.documentElement, {
				childList: true,
				subtree: true
			});
	});
}

/* Helper function for loading external Javascript*/
function loadScript(url, callback) {
	let script = document.createElement("script")
	script.type = "text/javascript";
	if (script.readyState) { // only required for IE <9

		script.onreadystatechange = function() {
			if (script.readyState === "loaded" || script.readyState === "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};

	} else { //Others

		script.onload = function() {
			callback();
		};

	}

	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

/* Actual functionality */
elementReady("head").then(
	(elementsAreLoaded) => {
		/* Set viewport scale to 1 */
		let meta = document.createElement('meta');
		meta.name = "viewport";
		meta.content = "width=device-width, initial-scale=1";
		document.getElementsByTagName('head')[0].appendChild(meta);

		/* Fix for play btn double clicking on Android touch events
		   TODO: Implementaiton does not appear to work, needs investigation. */
		document.getElementById('plex').addEventListener('touchstart', (e) => {
			let resumeButton = document.querySelectorAll('button[data-qa-id="resumeButton"]')[0];
			let pauseButton = document.querySelectorAll('button[data-qa-id="pauseButton"]')[0];

			if (
				resumeButton && resumeButton.contains(e.target) ||
				pauseButton && pauseButton.contains(e.target)
			) {
				e.preventDefault();
			}

		});

		/* Add jQuery then apply fix for navbar overflow */
		loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js', function() {
			/* Fix for navbar overflow */
			elementReady('div[class*="QuickSearch-container-"]').then(

				(elementsAreLoaded) => {
					$('div[class*="QuickSearch-container-"]').focusin(function() {
						$('div[class*="NavBar-right-"]').css("display", "none");
					});

					$('div[class*="QuickSearch-container-"]').focusout(function() {
						$('div[class*="NavBar-right-"]').css("display", "block");
					});
				});

		});

	});