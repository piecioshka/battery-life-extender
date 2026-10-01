const { app, Menu, Tray } = require("electron");
const { trayIconPath, appName } = require("./config");

// Module-level reference: a tray kept only in a local variable gets garbage
// collected and silently disappears from the menu bar.
let tray = null;

app.whenReady().then(() => {
  tray = new Tray(trayIconPath);
  const contextMenu = Menu.buildFromTemplate([
    { role: "about" },
    { role: "quit" },
  ]);
  tray.setToolTip(appName);
  tray.setContextMenu(contextMenu);
});
