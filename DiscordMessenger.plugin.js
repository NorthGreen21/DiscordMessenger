/**
 * @name DiscordMessenger
 * @author NorthGreen21
 * @description A plugin for BetterDiscord that reduces the size of the Discord window and allows for a more compact and out-of-your-way approach to a messenger.
 * @version 0.1
 */

module.exports = class DiscordMessenger {
    start() {
        var button = document.createElement('button');
        button.setAttribute('id', "messenger");
        var location = document.getElementsByClassName('listItem-3SmSlK')[0];
        location.insertAdjacentElement('afterend', button);
    }

    stop() {
        document.getElementById("messenger").remove();
    }
}