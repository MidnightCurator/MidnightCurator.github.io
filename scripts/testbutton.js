let textIsShown = false;

function changeButton(buttonId) {
				if (textIsShown == false) {
								document.getElementById(buttonId).innerHTML = Date();
								textIsShown = true;
				} else {
								document.getElementById(buttonId).innerHTML = "";
								textIsShown = false;
				}
}