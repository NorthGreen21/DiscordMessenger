/**
 * @name DiscordMessenger
 * @author NorthGreen21
 * @description A plugin for BetterDiscord that reduces the size of the Discord window and allows for a more compact and out-of-your-way approach to a messenger.
 * @version 0.1
 */

 module.exports = class DiscordMessenger {
    start() {
		function hoverOver() {
			button.style.cursor = 'pointer';
		}

		function loadMessenger() {
			console.log("Loaded!");
		}

        var button = document.createElement('img');
        button.setAttribute('src', 'https://raw.githubusercontent.com/NorthGreen21/DiscordMessenger/main/dmsized.png');
		button.setAttribute('id', "messenger");
        var location = document.getElementsByClassName('listItem-3SmSlK')[0];
        location.insertAdjacentElement('afterend', button);
		button.style.height = "23px";
		button.style.width = "36px";
		button.style.marginLeft = "18px";
		button.style.marginTop = "5px";
		button.style.marginBottom = "10px";
		button.addEventListener('mouseover', hoverOver);
		button.addEventListener('click', loadMessenger);
    }

    stop() {
        document.getElementById("messenger").remove();
    }
}