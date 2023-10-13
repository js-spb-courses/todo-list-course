import { items } from './script.js';
import { storage } from './storage.js';

//  parcel / GULP / webPack

console.log(items);

storage.create().then((items) => {
  create(items);
});

function create() {}

function remove() {}
