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

elementReady("head").then( // Email button
	(elementsAreLoaded) => {
		/* Set viewport scale to 1 */
		var meta = document.createElement('meta');
		meta.name = "viewport";
		meta.content = "width=device-width, initial-scale=1";
		document.getElementsByTagName('head')[0].appendChild(meta);

		/* Prevent play btn from double clicking */
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
	});