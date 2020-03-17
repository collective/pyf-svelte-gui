import { api_url } from "./settings";
import { package_list } from "./stores";
import { search_term } from "./stores";
import { plone_version } from "./stores";
import { search_classifiers } from "./stores";

let text = "";
let selected_plone_version = "";

export const unsub_search_term = search_term.subscribe(value => {
  text = value;
});

export const unsub_plone_version = plone_version.subscribe(value => {
  selected_plone_version = value;
});


export function doSearch(e) {
  if (e.target.value.length <= 2) {
    return;
  }
  console.log("search...", api_url);

  let classifiers = ["Framework :: Plone", "Framework :: Plone :: Addon"];
  if (selected_plone_version) {
    classifiers.push(selected_plone_version);
  }

  fetch(api_url + "/search", {
    method: "POST",
    body: JSON.stringify({
      text: text,
      classifiers: classifiers
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      package_list.set(data.result.batch);
    })
    .catch(error => console.error(error));
}
