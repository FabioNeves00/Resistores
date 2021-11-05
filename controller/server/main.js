const { app, BrowserWindow } = require("electron");

function createWindow() {
  const window = new BrowserWindow({
    width: 1400,
    height: 900,
    icon: "view/img/Icons8-Ios7-Industry-Resistor.ico",
  });
  window.loadFile("view/screen/index.html");
  window.removeMenu();
}

app.whenReady().then(() => {
  createWindow();
});