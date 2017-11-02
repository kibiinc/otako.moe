/*
 * Simple TS version of the client.
 * It doesn't work :(
 */

import {app, BrowserWindow} from 'electron'

let OtakoWindow

app.on('ready', () => {
    OtakoWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
});