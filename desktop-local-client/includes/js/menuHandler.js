/*
 *
 * Source code by Kibii Devs.
 * Author(s): Andreas P. <apap04@otakoapp.com>
 * Purpose: This is used for the title bar buttons.
 * 
 */

const $ = require('https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js');
const { remote } = require('electron');

const win = remote.getCurrentWindow();

$('.minimize').click(function() {
    win.minimize();
})

$('.maximize').click(function() {
    if (!win.isMaximized()) {
        win.maximize();
    
 } else {
    win.unmaximize();
 }
});

$('.close').click(function() {
    win.close();
});

$('.minimize-app').click(function() {
    win.minimize();
})

$('.maximize-app').click(function() {
    if (!win.isMaximized()) {
        win.maximize();
    
 } else {
    win.unmaximize();
 }
});

$('.close-app').click(function() {
    win.close();
});