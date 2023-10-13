import { storage } from './storage.js';
import {
  subscribeOnAdd,
  subscribeOnDelete,
  addItem,
  deleteItem,
} from './items.js';

subscribeOnAdd(function (items) {
  debugger;
});

subscribeOnDelete(function (item) {
  debugger;
});

let items = [];

const htmlElements = {
  formElement: document.querySelector('.todo-form'),
  itemList: document.querySelector('.item-list'),
  inputText: document.querySelector('.todo-form__input'),
};

storage.getAll().then((res) => {
  items = res;
  addItem(items);
  renderAllTask();
});

htmlElements.formElement.addEventListener('submit', createItem);
htmlElements.itemList.addEventListener('click', deleteItem);

function getHtmlItemTemplate(item) {
  return `
  <div class="item" data-id="${item.id}">
    ${item.text}
    <button class="item__delete-button">x</button>
  </div>`;
}

function renderAllTask() {
  let htmlString = '';

  for (let i = 0; i < items.length; i++) {
    htmlString += getHtmlItemTemplate(items[i]);
  }

  htmlElements.itemList.innerHTML = htmlString;
}

function createItem(event) {
  event.preventDefault();

  const text = htmlElements.inputText.value;

  if (text === '') {
    return;
  }

  storage.create(text).then((res) => {
    const htmlString = getHtmlItemTemplate({
      id: res.id,
      text: text,
    });

    items.push({
      text: text,
      id: res.id,
    });

    addItem(items.at(0));

    htmlElements.itemList.innerHTML += htmlString;
    htmlElements.inputText.value = '';
  });
}

function deleteItem(event) {
  if (event.target.classList.contains('item__delete-button') !== true) {
    return;
  }

  const id = event.target.parentElement.dataset.id;
  const element = document.querySelector(`[data-id="${id}"]`);

  event.target.classList.add('item__delete-button--disabled');

  storage
    .delete(id)
    .then(function () {
      element.remove();

      deleteItem(id);
    })
    .catch(function () {
      alert('Сервер упал!!!');
    })
    .finally(function () {
      event.target.classList.remove('item__delete-button--disabled');
    });
}
