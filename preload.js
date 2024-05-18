const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('simpleAPI', {
  setTitle: (title) => ipcRenderer.send('simple-poe-trade', title)
});
