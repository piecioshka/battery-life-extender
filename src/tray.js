const { app, Menu, Tray } = require("electron");
const { trayIconPath, appName } = require("./config");

app.whenReady().then(() => {
  const tray = new Tray(trayIconPath);
  const contextMenu = Menu.buildFromTemplate([
    { role: "about" },
    {
      type: "normal",
      label: "Quit",
      role: "quit",
      checked: false,
      click: () => {
        app.exit();
      },
    },
  ]);
  tray.setToolTip(appName);
  tray.setContextMenu(contextMenu);
});
