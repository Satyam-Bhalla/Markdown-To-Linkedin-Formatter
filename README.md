# Markdown-To-Linkedin-Formatter

This repository contains a simple Edge Browser extension that converts pasted Markdown text into a LinkedIn-friendly format using Unicode formatting.

## Using with Microsoft Edge

After downloading the extension from the Edge Add-ons Store:

1. Open Microsoft Edge and go to `edge://extensions/`.
2. Ensure the extension is enabled.
3. Visit LinkedIn and paste Markdown text into a post composer field. The extension will automatically transform the text into a LinkedIn-friendly format.

## Installation

1. Open Edge and navigate to `edge://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the `extension` folder in this repository.
4. Visit LinkedIn and paste Markdown text into a post composer field. The extension will automatically transform the text.

## Development

The conversion logic is implemented in `contentScript.js` and mirrors the behaviour of the original Python script. Feel free to modify it to suit your needs.
