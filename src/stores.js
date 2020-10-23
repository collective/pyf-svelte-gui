import { writable } from 'svelte/store';

export const package_list = writable([]);

export const search_filter = writable({});
export const search_term = writable("");
export const search_classifiers = writable([]);
