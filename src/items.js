let itemsV2 = [];

const callbacks = [];

export function addItem(newItems) {
  itemsV2 = [...itemsV2, ...newItems];
  callbacks.forEach((callback) => callback(newItems));
}

export function deleteItem(itemId) {
  //
  debugger;
}

export function subscribeOnAdd(callback) {
  callbacks.push(callback);
}

export function subscribeOnDelete(callback) {
  callbacks.push(callback);
}
