// Projects Hub: add a project by copying one block below.
//   name    the project's name
//   desc    one or two short sentences
//   status  "Live", "In development", "Paused" or "Archived"
//   url     optional: where the card links (website, repo or download)
//   notes   optional: short facts shown as small tags
//   icon    optional: logo, either an image URL or inline <svg> code; without one the card shows the first letter
//   repo    optional: "owner/name" on GitHub; the card shows when it was last updated
//   updated optional: a date like "2026-11-17" if there is no repo
const PROJECTS = [
  {
    name: "Scoreline",
    desc: "Free fan sports app with live scores and game detail for NFL, college football, NBA, MLB and F1. Web, Windows and Android.",
    status: "Live",
    url: "https://cadensauce.github.io/scoreline/",
    icon: '<svg viewBox="0 0 32 32"><path d="M7 22h18M7 16h12M7 10h7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
    repo: "cadensauce/scoreline",
    notes: ["Website", "Windows", "Android"]
  },
  {
    name: "Classroom Hub",
    desc: "School day dashboard: bell schedule, countdown to the final bell, weather, a daily streak and quick links.",
    status: "Live",
    url: "https://cadensauce.github.io/classroom-hub/",
    repo: "cadensauce/classroom-hub"
  },
  {
    name: "Boreas",
    desc: "Free PC optimizer for Windows gamers: one-click Boost, tweaks for each game, NVIDIA and AMD support, and every change can be undone.",
    status: "In development",
    url: "https://cadensauce.github.io/boreas/",
    icon: "https://cadensauce.github.io/boreas/icon.png",
    repo: "cadensauce/boreas",
    notes: ["Windows", "Rust", "Free download"]
  }
];
