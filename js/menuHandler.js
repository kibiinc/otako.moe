/*
 *
 * Source code by Kibii Devs.
 * Author(s): Andreas P. <apap04@otakoapp.com>
 * Purpose: This is used for the title bar buttons.
 * 
 */

const $ = require('jquery');
const { remote } = require('electron');

const win = remote.getCurrentWindow();

$('.titlebar__icon--minimize').click(function() {
    win.minimize();
})

$('.titlebar__icon--expand').click(function() {
    if (!win.isMaximized()) {
        win.maximize();
 } else {
    win.unmaximize();
 }
});

$('.titlebar__icon--close').click(function() {
    win.close();
});