export const byId = (id, scope = document) => scope.getElementById(id);
export const $ = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => scope.querySelectorAll(selector);
export const setLocalStorage = (key, val) => { localStorage.setItem(key, val);};
export const getLocalStorage = (key) => { return localStorage.getItem(key);};
export const setAttr = (el, key, val) => { el.setAttribute(key, val);};