"use strict";
/// <reference types="@figma/plugin-typings" />
figma.showUI(__html__, {
    width: 260,
    height: 300
});
figma.ui.onmessage = (message) => {
    if (message.type === "close") {
        figma.closePlugin();
    }
};
