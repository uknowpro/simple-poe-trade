/* eslint-disable @typescript-eslint/no-var-requires */
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import serve from 'electron-serve';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadURL = serve({ directory: '../renderer/public' });

let mainWindow;

function isDev() {
	return !app.isPackaged;
}

function handleSetTitle(event, title) {
	const webContents = event.sender;
	const win = BrowserWindow.fromWebContents(webContents);
	win.setTitle(title);
}

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 600,
		height: 400,
		webPreferences: {
				nodeIntegration: true,
				preload: path.join(__dirname, '../preload.js'),
				// enableRemoteModule: true,
				// contextIsolation: false
		},
		// icon: path.join(__dirname, '../renderer/public/favicon.png'),
		show: false
	});

    // This block of code is intended for development purpose only.
    // Delete this entire block of code when you are ready to package the application.
    if (isDev()) {
			mainWindow.loadURL('http://localhost:8080/');
	} else {
			loadURL(mainWindow);
	}
	
	// Uncomment the following line of code when app is ready to be packaged.
	// loadURL(mainWindow);

	// Open the DevTools and also disable Electron Security Warning.
	// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;
	// mainWindow.webContents.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
			// Dereference the window object, usually you would store windows
			// in an array if your app supports multi windows, this is the time
			// when you should delete the corresponding element.
			mainWindow = null
	});

	// Emitted when the window is ready to be shown
	// This helps in showing the window gracefully.
	mainWindow.once('ready-to-show', () => {
			mainWindow.show()
	});

  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: "deny" };
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	ipcMain.on('simple-poe-trade', handleSetTitle);
	createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
});
