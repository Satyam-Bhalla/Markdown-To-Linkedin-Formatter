# Markdown-To-Linkedin-Formatter

## Publishing to Chrome Web Store

1. Build a ZIP archive of the `extension` folder. For example:
   ```bash
   zip -r extension.zip extension
   ```
2. Visit the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).
3. Upload the ZIP, provide required assets (screenshots, a 128x128 icon, description), and submit for review.
4. Bump the version field in `manifest.json` for each release.
=======
This repository contains a simple Chrome extension that converts pasted Markdown text into a LinkedIn-friendly format using Unicode formatting.

## Installation

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the `extension` folder in this repository.
4. Visit LinkedIn and paste Markdown text into a post composer field. The extension will automatically transform the text.

## Development

The conversion logic is implemented in `contentScript.js` and mirrors the behaviour of the original Python script. Feel free to modify it to suit your needs.

