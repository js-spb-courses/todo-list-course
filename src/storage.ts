interface Task {
  id: string;
  text: string;
}

interface Storage {
  itemsKey: string;
  idKey: string;
  api: string;
  add: (a: number, b: number) => number;
  getAll: () => Promise<Task[]>;
}

export const storage: Storage = {
  itemsKey: 'todo-items',
  idKey: 'todo-id',
  api: 'http://localhost:3000/items',
  add: function (a: number, b: number): number {
    return a + b;
  },

  getAll: function (): Promise<Task[]> {
    return fetch(this.api, { method: 'GET' }).then((res) => {
      return res.json();
    });
  },
  create: function (text) {
    return fetch(this.api, {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        text: text,
      }),
    }).then((res) => {
      return res.json();
    });
  },
  delete: function (id) {
    return fetch(this.api, {
      method: 'DELETE',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({ id: id }),
    });
  },
  update: function (id, text) {
    return fetch(this.api, {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        id: id,
        text: text,
      }),
    }).then((res) => {
      return res.json();
    });
  },
};
