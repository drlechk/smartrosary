# SmartRosary Landing Page

Static public entry point for SmartRosary links, downloads, privacy information, and user-facing navigation to the dashboard, installer, intentions editor, and how-to pages.

## What is in this repository

- `index.html` - main SmartRosary landing page.
- `app.html` - SmartRosary Companion APK download page with version metadata and changelog UI.
- `privacy.html` - multilingual privacy policy page.
- `app-changelog.js` - APK metadata and changelog entries consumed by `app.html`.
- `downloads/` - versioned Android APK files plus `smartrosary-companion-latest.apk`.
- `favicon.svg` - site icon.

## Local development

There is no package install or build step documented. Open the HTML files directly in a browser, or serve the directory locally:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Release notes

The site links to hosted SmartRosary services such as:

- Dashboard: `https://drlechk.github.io/smartrosary-dashboard/`
- Web installer: `https://drlechk.github.io/smartrosary-web-installer/`
- Intentions editor: `https://drlechk.github.io/smartrosary-intentions-editor/`
- How-to pages: `https://drlechk.github.io/smartrosary-howto/`

When publishing a new Android APK, update `downloads/`, `app-changelog.js`, and the latest APK alias together.

## Validation

Check `index.html`, `app.html`, and `privacy.html` in a browser after changes. There is no automated test command documented for this repository.

## License

This repository is licensed under the PolyForm Noncommercial License 1.0.0. See `LICENSE`.
