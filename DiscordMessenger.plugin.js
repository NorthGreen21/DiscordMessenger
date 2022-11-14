/**
 * @name DiscordMessenger
 * @author NorthGreen21
 * @description A plugin for BetterDiscord that reduces the size of the Discord window and allows for a more compact and out-of-your-way approach to a messenger.
 * @version 0.1
 */

 module.exports = class DiscordMessenger {
    start() {
		function buttonHoverOver() {
			button.style.backgroundColor = '#40A05E';
		}

		function buttonHoverOut() {
			button.style.backgroundColor = 'var(--background-primary)';
		}

		function buttonDown() {
			button.style.boxShadow = 'none';
			button.style.transform = 'translate(1px, 1px)';
		}

		function buttonUp() {
			button.style.boxShadow = '3px 3px var(--background-floating)';
			button.style.transform = 'translate(0px, 0px)';
		}

        var button = document.createElement('button');
        button.setAttribute('id', "messenger");
        var location = document.getElementsByClassName('listItem-3SmSlK')[0];
        location.insertAdjacentElement('afterend', button);

		button.style.width = '42px';
		button.style.height = '12px';
		button.style.margin = '15px';
		button.style.marginTop = '3px';
		button.style.marginBottom = '10px';
		button.style.borderRadius = '3px';
		button.style.border = '1px solid var(--background-secondary)';
		button.style.backgroundColor = 'var(--background-primary)';
		button.style.boxShadow = '3px 3px var(--background-floating)';
		button.style.transition = 'background-color .1s ease-out';

		button.addEventListener('mouseover', buttonHoverOver);
		button.addEventListener('mouseout', buttonHoverOut);
		button.addEventListener('mousedown', buttonDown);
		button.addEventListener('mouseup', buttonUp);
    }

    stop() {
        document.getElementById("messenger").remove();
    }
}