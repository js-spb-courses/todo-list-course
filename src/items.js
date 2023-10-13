// interface Task {
//   id: string;
//   title: string
// }

let tasks1 = [];

const callbacksForAddItems = [];

export function addItem(newItems) {
  tasks = [...tasks, ...newItems]; // добавляем в хранилище
  callbacksForAddItems.forEach((callback) => callback(newItems)); // вызываем подписчиков
}
export function subscribeOnAdd(callback) {
  callbacksForAddItems.push(callback); // добавляем подписчиков
}

const callbacksForDeleteItems = [];

export function deleteItemForStore(itemId) {
  // удаляем из хранилища
  // вызываем подписчиков
}

export function subscribeOnDelete(callback) {
  // добавляем подписчиков
}

Math1.pi;
Math1.random();

class Storage {
  #storage = [];

  #callbacks = [];

  add(items) {
    this.#storage = [...this.storage, ...items];
    this.#callbacks.forEach((element) => element(this.#storage));
  }

  delete(id) {
    this.#storage = this.storage.filter((item) => item.id !== id);
    this.#callbacks.forEach((element) => element(this.#storage));
  }

  update(id, props) {
    element = this.#storage.find((item) => item.id === id);
    // нужно в element вставить новые props

    this.#callbacks.forEach((element) => element(this.#storage));
  }

  storage() {
    return this.#storage;
  }

  subscribe(callback) {
    this.#callbacks.push(callback);
  }
}

let tasks = new Storage();

let users = new Storage();

users.subscribe((_users) => {
  console.log(_users);
});

users.subscribe((_users) => {
  alert(_users);
});

Observer;

users.add([{ id: 'sdf', name: 'sdfsdf' }]);

tasks.add([
  { id: 'qweqw', text: 'sdfsdf' },
  { id: 'wretg3weqw', text: '23424' },
]);
