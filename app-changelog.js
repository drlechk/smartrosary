window.SmartRosaryAppVersion = "v1.0.4";
window.SmartRosaryAppBuild = "5";
window.SmartRosaryAppApk = {
  latest: "downloads/smartrosary-companion-latest.apk",
  versioned: "downloads/smartrosary-companion-v1.0.4.apk",
  size: "59 MB",
  sha256: "049d891c88cbb2aee1afe278f59a5839c186a89b761855254f99f0441141ae1f"
};

window.SmartRosaryAppChangelog = [
  {
    version: "v1.0.4",
    date: "2026-07-07",
    changes: [
      { type: "Added", text: "Rosary hardware/device type in paired-device entries when available from the last sync." },
      { type: "Fixed", text: "Localized firmware installer/update banner text and download source hints." },
      { type: "Fixed", text: "Localized common update, backup, history, settings, and intentions success messages." },
      { type: "Fixed", text: "Localized refresh and first BLE connection hints across supported app languages." }
    ]
  },
  {
    version: "v1.0.3",
    date: "2026-07-07",
    changes: [
      { type: "Added", text: "BLE paired-app management for connected rosaries, including app-slot listing and deletion of other paired apps." },
      { type: "Added", text: "App Settings reference ID for the current app." },
      { type: "Added", text: "Hardware ID and paired-app metadata support from firmware v1.34." },
      { type: "Fixed", text: "Android BLE GATT busy errors after deleting paired apps by serializing notify and characteristic write operations." },
      { type: "Fixed", text: "Automatic reconnect no longer opens the rosary permission prompt after this app was removed from the rosary by another paired app." },
      { type: "Fixed", text: "App Settings now shows only one app ID instead of rosary-specific historical pairing IDs." }
    ]
  },
  {
    version: "v1.0.2",
    date: "2026-07-06",
    changes: [
      { type: "Added", text: "Installed app version and build number at the bottom of App Settings." },
      { type: "Fixed", text: "Light-theme contrast for connection status, update information, list values, and statistics legends." },
      { type: "Fixed", text: "Mobile pairing retries now preserve the pending app token so multiple phones can pair without repeated approval loops." },
      { type: "Fixed", text: "Serialized UI commands and iOS long-read fallbacks for reliable live-view state and event updates with smaller negotiated BLE payloads." },
      { type: "Fixed", text: "Stable, throttled iOS remote input whose touch surface no longer scrolls the surrounding page during vertical gestures." }
    ]
  },
  {
    version: "v1.0.1",
    date: "2026-07-06",
    changes: [
      { type: "Added", text: "App appearance selector with System, Light, and Dark modes, persisted across restarts and translated into all six supported app languages." },
      { type: "Added", text: "Reproducible Polish App Store screenshot flows for iPhone and 13-inch iPad." },
      { type: "Added", text: "Gitea Actions workflow for version validation, analysis, tests, release APK builds, and downloadable APK artifacts." },
      { type: "Changed", text: "Localized paired-rosary firmware and last-sync labels." },
      { type: "Changed", text: "Prepared iOS signing, display metadata, encryption declaration, and App Store screenshot support for SmartRosary Companion." },
      { type: "Changed", text: "Removed obsolete density-specific branding source files." }
    ]
  },
  {
    version: "v1.0.0",
    date: "2026-07-03",
    changes: [
      { type: "Added", text: "Initial Android and iOS SmartRosary Companion release." },
      { type: "Added", text: "BLE pairing, scanning, connection, automatic reconnection, reads, writes, notifications, firmware updates, language installation, and intentions installation." },
      { type: "Added", text: "Home overview, live rosary view, device settings, statistics, history, intentions editor and scheduler, wallpaper upload, backup and restore, remote control, BLE management, and app settings." },
      { type: "Added", text: "Offline per-device caching and aggregate statistics/history for multiple paired rosaries." },
      { type: "Added", text: "German, English, Spanish, French, Polish, and Portuguese app languages." }
    ]
  }
];
