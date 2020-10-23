import { api_url } from "./settings";
import { package_list } from "./stores";
import { search_term } from "./stores";
import { search_filter } from "./stores";
import { search_classifiers } from "./stores";

let term = "";
let filter = {};

export const unsub_search_term = search_term.subscribe(value => {
  term = value;
});

export const unsub_search_filter = search_filter.subscribe(value => {
  filter = value;
});


export function doSearch() {
  if (term.length <= 1) {
    return;
  }
  console.log("search...", api_url);

  let classifiers = ["Framework :: Plone"];
  if (filter.plone_version) {
    classifiers.push(filter.plone_version);
  }
  if (filter.package_type) {
    classifiers.push(filter.package_type);
  }

  fetch(api_url + "/search", {
    method: "POST",
    body: JSON.stringify({
      text: term,
      classifiers: classifiers
    })
  })
    .then(response => response.json())
    .then(data => {
      if (data.result.batch === undefined){debugger;}
      let batch = data.result.batch || [];
      // console.log(batch);
      package_list.set(batch);
    })
    .catch(error => console.error(error));
}
