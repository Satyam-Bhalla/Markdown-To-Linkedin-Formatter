# Markdown-To-Linkedin-Formatter

## Publishing to Chrome Web Store

1. Build a ZIP archive of the `extension` folder. For example:
   ```bash
   zip -r extension.zip extension
   ```
2. Visit the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard).
3. Upload the ZIP, provide required assets (screenshots, a 128x128 icon, description), and submit for review.
4. Bump the version field in `manifest.json` for each release.
