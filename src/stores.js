import { writable } from 'svelte/store';

export const package_list = writable([]);

export const plone_version = writable();
export const package_type = writable();
export const search_term = writable("");
export const search_classifiers = writable([]);
