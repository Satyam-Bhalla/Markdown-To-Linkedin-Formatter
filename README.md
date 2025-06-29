# Markdown-To-Linkedin-Formatter

This repository contains a simple Chrome extension that converts pasted Markdown text into a LinkedIn-friendly format using Unicode formatting.

## Installation

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the `extension` folder in this repository.
4. Visit LinkedIn and paste Markdown text into a post composer field. The extension will automatically transform the text.

## Development

The conversion logic is implemented in `contentScript.js` and mirrors the behaviour of the original Python script. Feel free to modify it to suit your needs.

Add your own icons in `extension/icons`; the manifest references them.
