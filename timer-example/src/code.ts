/// <reference types="@figma/plugin-typings" />

figma.showUI(__html__, {
  width: 260,
  height: 220
});

figma.ui.onmessage = (message: { type: string }) => {
  if (message.type === "close") {
    figma.closePlugin();
  }
};