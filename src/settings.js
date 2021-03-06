export let api_url;

export const plone_versions = [
  { value: undefined, title: "All", default: true},
  { value: "Framework :: Plone :: 6.0", title: "6.0" },
  { value: "Framework :: Plone :: 5.2", title: "5.2" },
  { value: "Framework :: Plone :: 5.1", title: "5.1" },
  { value: "Framework :: Plone :: 5.0", title: "5.0" },
  { value: "Framework :: Plone :: 4.3", title: "4.3" }
];

export const package_types = [
  { value: undefined, title: "All", default: true},
  { value: "Framework :: Plone :: Addon", title: "Addon"},
  { value: "Framework :: Plone :: Theme", title: "Theme" },
  { value: "Framework :: Plone :: Core", title: "Core" }
];

if (process.env.isProd) {
  api_url = "https://addons.plone.org/api";
} else {
  api_url = "http://localhost:6543/api";
}
