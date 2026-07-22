window.SmartRosaryAppVersion = "v1.0.12";
window.SmartRosaryAppBuild = "13";
window.SmartRosaryAppApk = {
  latest: "downloads/smartrosary-companion-latest.apk",
  versioned: "downloads/smartrosary-companion-v1.0.12.apk",
  size: "62 MB",
  buildDate: "2026-07-22",
  sha256: "df72b12568519f80136aab869b08206efd894ca7d28fe7474d12af3745090705"
};

window.SmartRosaryAppChangelog = [
  {
    version: "v1.0.12",
    date: "2026-07-22",
    changes: [
      { type: "Fixed", text: "Firmware installation over BLE now uses conservative acknowledged chunks so ESP32-C3 rosaries are less likely to drop or crash midway through an update." }
    ]
  },
  {
    version: "v1.0.11",
    date: "2026-07-22",
    changes: [
      { type: "Fixed", text: "Home refresh now keeps cached rosary settings when the device returns a truncated Settings payload, avoiding raw malformed JSON errors while still applying fresh statistics." },
      { type: "Fixed", text: "Installed firmware version detection now salvages fwVersion and device metadata from partial Settings payloads so the app can keep showing update state after an interrupted read." }
    ]
  },
  {
    version: "v1.0.10",
    date: "2026-07-22",
    changes: [
      { type: "Added", text: "Own wallpaper photos from camera or gallery are copied into app cache, saved with a title, shown in a separate selector, and included in app backups." },
      { type: "Added", text: "The wallpaper preview supports drag and pinch gestures so cached photos can be positioned and resized before upload." },
      { type: "Added", text: "Android camera captures can recover from external camera activity restarts and reopen the Wallpaper screen with the captured preview selected." },
      { type: "Fixed", text: "Camera and gallery selection no longer intentionally suspend the rosary BLE connection while the external picker is open." },
      { type: "Fixed", text: "Wallpaper deletes refresh the device list after removal and switch away from the deleted wallpaper before deleting it." },
      { type: "Fixed", text: "Custom wallpaper conversion preserves the selected preview framing without cropping the already-loaded image unexpectedly." },
      { type: "Fixed", text: "Dark mode button text and icons stay readable on Wallpaper and other secondary action buttons." }
    ]
  },
  {
    version: "v1.0.9",
    date: "2026-07-20",
    changes: [
      { type: "Added", text: "Fast BLE v2 transfers for firmware, language, intentions, history restore, and wallpaper uploads on compatible rosary firmware." },
      { type: "Added", text: "The BLE Connection screen now shows whether the connected rosary is using v1 legacy or v2 fast transfer mode." },
      { type: "Fixed", text: "The phone screen now stays awake during long uploads to the rosary." }
    ]
  },
  {
    version: "v1.0.8",
    date: "2026-07-19",
    changes: [
      { type: "Fixed", text: "History downloads now use smaller BLE chunks and report incomplete transfers instead of showing truncated history." },
      { type: "Fixed", text: "History parsing now ignores undated or implausible records, matching the rosary firmware charts." },
      { type: "Fixed", text: "The intentions device preview now ignores system text scaling and bold-text accessibility overrides so it matches the device display." }
    ]
  },
  {
    version: "v1.0.7",
    date: "2026-07-18",
    changes: [
      { type: "Added", text: "Cached history, intentions, intention schedules, and wallpaper lists remain visible after the rosary disconnects." },
      { type: "Added", text: "Last-sync timestamps are shown on cached history, intentions, schedule, and wallpaper pages." },
      { type: "Changed", text: "Weekly history now starts on Sunday and shows the correct inclusive date span." },
      { type: "Changed", text: "History chart x-axis labels are horizontal, centered under their bars, and localized for day and year views." },
      { type: "Fixed", text: "Backup summaries and tapped backup details now use the selected app language." },
      { type: "Fixed", text: "The intention device preview title now follows the selected app language." }
    ]
  },
  {
    version: "v1.0.6",
    date: "2026-07-17",
    changes: [
      { type: "Changed", text: "History opens on the weekly view by default, matching the rosary device." },
      { type: "Changed", text: "Weekly history charts fit the full week on screen without horizontal scrolling." },
      { type: "Changed", text: "History chart stacks now follow the rosary device order for chaplets, mysteries, and intention-marked mysteries." }
    ]
  },
  {
    version: "v1.0.5",
    date: "2026-07-10",
    changes: [
      { type: "Added", text: "Firmware-update-only BLE compatibility for legacy rosaries that expose the original OTA write and READY status characteristics but predate device INFO, consent, and app-pairing characteristics." },
      { type: "Added", text: "First-run home guidance with a direct BLE search action when no rosary has been paired yet." },
      { type: "Fixed", text: "Rosary scans now finish shortly after a rosary advertisement is found instead of always waiting for the full timeout." },
      { type: "Fixed", text: "App startup reconnects to the preferred paired rosary or falls back to another paired rosary that is online." }
    ]
  },
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
